/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  PluginModule,
  injectable,
  storeKey,
  ReactantStore,
  ReactantAction,
  optional,
} from 'reactant-module';
import { ReducersMapObject } from 'redux';

const LastActionOptions = Symbol('LastActionOptions');

export interface ILastActionOptions {
  /**
   * Define a string as LastAction reducer key.
   */
  stateKey?: string;
}

export interface ILastActionState<T = any> extends ReactantAction<T> {
  /**
   * sync sequence
   */
  _sequence?: number;
}

@injectable()
class ReactantLastAction extends PluginModule {
  readonly [storeKey]?: ReactantStore;

  stateKey: string;

  private _sequence: number | undefined;

  constructor(@optional(LastActionOptions) public options: ILastActionOptions) {
    super();
    this.stateKey = this.options?.stateKey ?? 'lastAction';
  }

  beforeCombineRootReducers(reducers: ReducersMapObject): ReducersMapObject {
    if (Object.prototype.hasOwnProperty.call(reducers, this.stateKey)) {
      throw new Error(
        `The identifier '${this.stateKey}' has a duplicate name, please reset the option 'stateKey' of 'LastAction' module.`
      );
    }
    return Object.assign(reducers, {
      [this.stateKey]: (
        _state: ILastActionState | null = null,
        {
          // ignore inversePatches
          _inversePatches,
          state,
          rehydrate,
          register,
          ...action
        }: ILastActionState & { rehydrate: any; register: any }
      ) => ({
        ...action,
        // ignore redux-persist property function in the action
        ...(typeof rehydrate === 'function' ||
        typeof rehydrate === 'undefined' ||
        rehydrate === null
          ? {}
          : { rehydrate }),
        ...(typeof register === 'function' ||
        typeof register === 'undefined' ||
        register === null
          ? {}
          : { register }),
        _sequence: (_state?._sequence ?? 0) + 1,
      }),
    });
  }

  set sequence(value: number) {
    this._sequence = value;
  }

  get sequence() {
    return this._sequence ?? this.lastAction?._sequence ?? 0;
  }

  get lastAction(): ILastActionState {
    return this[storeKey]?.getState()[this.stateKey] ?? null;
  }
}

export { ReactantLastAction as LastAction, LastActionOptions };
