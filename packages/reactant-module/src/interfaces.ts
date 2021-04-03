import {
  Store,
  PreloadedState,
  AnyAction,
  Middleware,
  Action,
  Unsubscribe,
  ReducersMapObject,
} from 'redux';
import { Patch } from 'immer';
import { EnhancerOptions } from 'redux-devtools-extension';
import { Container, ModuleOptions } from 'reactant-di';
import {
  storeKey,
  subscriptionsKey,
  stateKey,
  actionIdentifier,
  loaderKey,
  enablePatchesKey,
  containerKey,
  identifierKey,
} from './constants';
import { PluginModule } from './core';

export interface DevOptions {
  enablePatches?: boolean;
  autoFreeze?: boolean;
  reduxDevTools?: boolean;
  reduxDevToolsOptions?: ReduxDevToolsOptions;
  // TODO: use `redux-immutable-state-invariant` for checking immutable?
}

export type ReduxDevToolsOptions = Pick<
  EnhancerOptions,
  Exclude<keyof EnhancerOptions, 'actionSanitizer' | 'serialize'>
>;

export type TypePreloadedState<T> = PreloadedState<T>;

export interface State {
  name?: string;
}

export type Subscriptions = (() => void)[];

export interface Service<T extends Record<string, any> = Record<string, any>>
  extends State {
  readonly [stateKey]?: T;
  readonly [storeKey]?: Store;
  readonly [loaderKey]?: Loader;
  readonly [enablePatchesKey]?: boolean;
  readonly [subscriptionsKey]?: Subscriptions;
  readonly [containerKey]?: Container;
  [identifierKey]?: string;
}

export type ThisService = Service & { [P: string]: any };

export type ReactModuleOptions<T = any> = ModuleOptions<T>;

export type ReactantStore = Store<any, AnyAction> & {
  reducers?: ReducersMapObject;
};

export type ReactantMiddleware = Middleware;

export interface ReactantAction<T = any> extends Action<string | symbol> {
  method?: string;
  state: Record<string, T>;
  _reactant: typeof actionIdentifier;
  _patches?: Patch[];
  _inversePatches?: Patch[];
}

export type StateMapObject<T extends Record<string, Function>> = {
  [P in keyof T]: T[P] extends (...args: any[]) => any
    ? FirstParameter<T[P]>
    : never;
};

export type FirstParameter<T extends (...args: any) => any> = T extends (
  param: infer P,
  ...args: any[]
) => any
  ? P
  : never;

type Collection<T> = {
  [P in Exclude<keyof T, keyof Service>]-?: NonNullable<T[P]>[];
};

export type PluginHooks = Collection<PluginModule>;

export type HandlePlugin<T = any> = (
  service: T,
  pluginHooks: PluginHooks
) => void;

export type Subscribe = (
  service: ThisService,
  listener: () => void
) => Unsubscribe;

type Selector<T> = () => T;

type Watcher<T> = (newValue: T, oldValue: T) => void;

export type Watch = <T>(
  service: ThisService,
  selector: Selector<T>,
  watcher: Watcher<T>
) => Unsubscribe;

export interface LoadOptions<T> {
  modules?: ReactModuleOptions[];
  main: ReactModuleOptions<T>;
}

export type Loader = (
  loadModules: ReactModuleOptions[],
  beforeReplaceReducer?: (container: Container) => void
) => void;

export type Load = (
  service: ThisService,
  loadModules: ReactModuleOptions[]
) => Promise<Container>;

export type StateService<T> = Service<T>;

export interface PropertyDescriptor<T> extends TypedPropertyDescriptor<T> {
  initializer(): T;
}

export type PartialRequired<T, K extends keyof T> = Required<Pick<T, K>> &
  Pick<T, Exclude<keyof T, K>>;

type OptionalKeyOf<T> = Exclude<
  {
    [K in keyof T]: T extends Record<K, T[K]> ? never : K;
  }[keyof T],
  undefined
>;

type ExcludeRequired<T> = {
  [K in keyof T]-?: T extends Record<K, T[K]> ? never : T[K];
};

export type PickOptional<T> = Pick<ExcludeRequired<T>, OptionalKeyOf<T>>;

export type PartialKeys<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> &
  Partial<Pick<T, K>>;

/**
 * It's used to infer the type of `import()` type
 *
 * @example
 * // counter.ts: `export const list = [''];`
 * type List = ImportType<typeof import('./counter'), 'list'>;
 */
export type ImportType<T, K extends keyof T> = T extends Record<K, infer R>
  ? R
  : never;

/**
 * It's used to infer the type of `import()` class type
 * or use `import type` in TypeScript 3.8+
 *
 * @example
 * // counter.ts: `export class Counter {}`
 * type Counter = ImportClass<typeof import('./counter'), 'Counter'>;
 */
export type ImportClass<T, K extends keyof T> = T extends Record<K, infer S>
  ? S extends new (...args: any[]) => infer R
    ? R
    : never
  : never;
