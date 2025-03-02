export const storeKey: unique symbol = Symbol('store');
export const loaderKey: unique symbol = Symbol('loader');
export const subscriptionsKey: unique symbol = Symbol('subscriptions');
export const unsubscriptionsKey: unique symbol = Symbol('unsubscriptions');
export const stateKey: unique symbol = Symbol('state');
export const defaultStateKey: unique symbol = Symbol('defaultState');
export const enablePatchesKey: unique symbol = Symbol('enablePatches');
export const enableInspectorKey: unique symbol = Symbol('enableInspector');
export const actionIdentifier = 'REACTANT_ACTION' as const;
