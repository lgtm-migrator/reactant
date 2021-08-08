import { identifierKey, Service } from 'reactant';
import { proxyClient } from '../client';
import { detectClient } from '../port';

export const proxify = (
  target: object,
  key: string,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => Promise<any>>
) => {
  const fn = descriptor.value;
  if (typeof fn !== 'function') {
    throw new Error(
      `${String(key)} can only be decorated by '@proxify' as a class method.`
    );
  }
  function value(this: Service, ...args: any) {
    if (detectClient()) {
      return proxyClient({
        module: this[identifierKey]!,
        method: key,
        args,
      });
    }
    return fn!.apply(this, args);
  }
  return {
    ...descriptor,
    value,
  };
};