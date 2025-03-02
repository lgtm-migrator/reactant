import { routerModuleName } from './constants';
import { ActionOptions } from './interfaces';

export const checkPatches = (
  oldStateTree: Record<string, any>,
  options: ActionOptions
) => {
  options._patches!.forEach(({ op, path, value }) => {
    if (
      op === 'replace' &&
      (toString.call(value) === '[object Object]' || Array.isArray(value))
    ) {
      const oldState = path.reduce(
        (state, _path) => state?.[_path],
        oldStateTree
      );
      if (
        oldState &&
        typeof oldState === 'object' &&
        path[0] !== routerModuleName
      ) {
        const state = path.join('.');
        console.warn(
          `The state '${state}' operation in the method '${
            options.method
          }' of the module '${String(
            options.type
          )}'  is a replacement update operation, be sure to check the state '${state}' update operation and use mutation updates to ensure the minimum set of update patches.`
        );
      }
    }
  });
};
