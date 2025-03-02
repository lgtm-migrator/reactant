/* eslint-disable consistent-return */
import React, { PropsWithChildren, ReactNode } from 'react';
import {
  PluginModule,
  injectable,
  inject,
  Service,
  stateKey,
  identifierKey,
  nameKey,
} from 'reactant-module';
import { Reducer, ReducersMapObject, Store } from 'redux';
import {
  persistStore,
  persistReducer,
  Storage,
  PersistConfig,
  Persistor,
  REHYDRATE,
} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const StorageOptions = Symbol('StorageOptions');

export interface IStorageOptions extends Partial<PersistConfig<any>> {
  /**
   * define storage container
   */
  storage: Storage;
  /**
   * define storage loading UI
   */
  loading?: ReactNode;
}

export type SetStorageOptions<T> = Pick<
  Partial<PersistConfig<any>>,
  Exclude<keyof PersistConfig<any>, 'key' | 'blacklist' | 'whitelist'>
> & {
  /**
   * define persistent data blacklist
   */
  blacklist?: (keyof T)[];
  /**
   * define persistent data whitelist
   */
  whitelist?: (keyof T)[];
};

@injectable()
class ReactantStorage extends PluginModule {
  protected blacklist: string[] = ['router', 'lastAction'];

  persistor?: Persistor;

  rehydrated = false;

  constructor(@inject(StorageOptions) options: IStorageOptions) {
    super();
    this.options = {
      ...options,
      whitelist: options.whitelist ?? [],
    };
    this.persistRootConfig = {
      key: 'root',
      ...this.options,
    };
  }

  protected persistConfig: Record<string, PersistConfig<any>> = {};

  protected persistRootConfig: Pick<
    IStorageOptions,
    Exclude<keyof IStorageOptions, 'key'>
  > & {
    key: string;
  };

  public options: IStorageOptions;

  private storageSettingMap = new Map<object, Function>();

  /**
   * set module to storage persistent
   */
  setStorage<T extends object>(target: T, options: SetStorageOptions<T>) {
    const module: Service = target;
    if (__DEV__) {
      if (typeof module[nameKey] !== 'string') {
        throw new Error(
          `Module '${module.constructor.name}' is invalid for using 'setStorage', the parameter 'options.name' of the decorator '@injectable(options)' that decorates the '${module.constructor.name}' module must be specified as a string.`
        );
      }
      if (typeof module[stateKey] !== 'object') {
        throw new Error(
          `Module '${module.constructor.name}' is invalid for using 'setStorage', the current module does not have any global state that is decorated with '@state'.`
        );
      }
      if (Object.prototype.hasOwnProperty.call(module[stateKey], '_persist')) {
        throw new Error(
          `Module '${module.constructor.name}' is invalid for using 'setStorage', the current module should not customize the state with the key '_persist'.`
        );
      }
    }
    this.storageSettingMap.set(module, () => {
      const persistConfig = {
        storage: this.options.storage,
        ...options,
        key: module[identifierKey],
      };
      Object.assign(this.persistConfig, {
        [module[identifierKey]!]: persistConfig,
      });
    });
  }

  /**
   * get every module rehydrated
   */
  getRehydrated(target: object) {
    const module: Service = target;
    if (!this.storageSettingMap.has(module)) {
      throw new Error(
        `Module '${module.constructor.name}' is not set to storage persistent.`
      );
    }
    const state = module[stateKey]!;
    return state._persist.rehydrated;
  }

  beforeCombineRootReducers(reducers: ReducersMapObject): ReducersMapObject {
    for (const [_, set] of this.storageSettingMap) {
      set();
    }
    if (__DEV__) {
      if (reducers._persist) {
        throw new Error(
          `Storage module conflict with the names of other modules, make sure that no module has a name of '_persist'.`
        );
      }
    }
    Object.keys(reducers).forEach((key) => {
      const isTempIdentifier = /^@@reactant\//.test(key);
      if (isTempIdentifier) {
        this.blacklist.push(key);
      }
      const persistConfig = this.persistConfig[key];
      if (persistConfig) {
        const reducer = persistReducer(persistConfig, reducers[key]);
        Object.assign(reducers, {
          [key]: reducer,
        });
      } else if (this.persistRootConfig.blacklist) {
        // use blacklist mode
        if (isTempIdentifier) {
          if (__DEV__) {
            console.warn(
              `For state persistence, The '@injectable({ name })' in the ${key} module has not been set yet.`
            );
          }
        }
      }
    });
    return reducers;
  }

  afterCombineRootReducers(rootReducer: Reducer) {
    return persistReducer(
      {
        blacklist: [...Object.keys(this.persistConfig), ...this.blacklist],
        ...this.persistRootConfig,
      },
      rootReducer
    );
  }

  /**
   * manual persist
   */
  manualPersist = false;

  /**
   * persistence paused
   */
  paused = false;

  afterCreateStore(store: Store) {
    this.paused = this.manualPersist;
    const { replaceReducer } = store;
    // eslint-disable-next-line no-param-reassign
    store.replaceReducer = (reducer: Reducer) => {
      this.rehydrated = false;
      replaceReducer(reducer);
      this.persistor = persistStore(
        store,
        // TODO: fix type https://github.com/rt2zz/redux-persist/pull/1247
        {
          manualPersist: this.manualPersist,
        } as any,
        () => {
          // after redux-persist action rehydrate
          this.rehydrated = true;
          this._onRehydrated?.();
        }
      );
      this._enhancePersistor();
    };
    this.persistor = persistStore(
      store,
      // TODO: fix type https://github.com/rt2zz/redux-persist/pull/1247
      {
        manualPersist: this.manualPersist,
      } as any,
      () => {
        // after redux-persist action rehydrate
        this.rehydrated = true;
        this._onRehydrated?.();
      }
    );
    this._enhancePersistor();
    return store;
  }

  private _enhancePersistor() {
    if (!this.persistor) {
      throw new Error(`Persistor is not created yet.`);
    }
    const { pause, persist } = this.persistor;
    this.persistor.pause = () => {
      if (!this.paused) {
        this.paused = true;
        pause();
      }
    };
    this.persistor.persist = () => {
      if (this.paused) {
        this.paused = false;
        persist();
      }
    };
  }

  protected rehydrateCallbackSet = new Set<() => void>();

  protected _onRehydrated() {
    if (!this.rehydrateCallbackSet.size) return;
    const callbacks = Array.from(this.rehydrateCallbackSet);
    this.rehydrateCallbackSet.clear();
    for (const callback of callbacks) {
      callback();
    }
  }

  /**
   *  onRehydrated
   *
   * callback function will be called after rehydration is finished.
   */
  onRehydrated(callback: () => void) {
    if (this.rehydrated) {
      callback();
    } else {
      this.rehydrateCallbackSet.add(callback);
    }
  }

  provider = (props: PropsWithChildren<{}>) => {
    return (
      <PersistGate
        loading={this.options.loading || null}
        persistor={this.persistor!}
      >
        {props.children}
      </PersistGate>
    );
  };
}

export { ReactantStorage as Storage, StorageOptions, REHYDRATE };
