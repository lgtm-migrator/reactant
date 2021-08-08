import { App, applyPatches } from 'reactant';
import { getClientTransport } from './createTransport';
import { CallbackWithHook, Transports } from './interfaces';
import { lastActionName, proxyClientActionName } from './constants';
import { detectClient, setPort } from './port';

export const clientCallbacks = new Set<CallbackWithHook>();

export const onClient = (callback: CallbackWithHook) => {
  if (typeof callback !== 'function') {
    throw new Error(`'onServer' argument should be a function.`);
  }
  clientCallbacks.add(callback);
  return () => {
    clientCallbacks.delete(callback);
  };
};

export const proxyClient = ({
  module,
  method,
  args,
}: {
  module: string;
  method: string;
  args: any[];
}) => {
  if (detectClient()) {
    const clientTransport = getClientTransport();
    if (clientTransport) {
      return clientTransport.emit(proxyClientActionName, {
        module,
        method,
        args,
      });
    }
  }
  return Promise.reject(new Error(`error`));
};

export const handleClient = (
  app: App<any>,
  transport: Transports['client'],
  disposeServer?: () => void
) => {
  if (!transport) {
    throw new Error(``);
  }
  disposeServer?.();
  setPort({ client: app }, clientCallbacks, transport);
  const disposeListeners: ((() => void) | undefined)[] = [];
  disposeListeners.push(
    transport.listen(lastActionName, async (lastAction) => {
      const state = applyPatches(app.store!.getState(), lastAction._patches!);
      app.store!.dispatch({ ...lastAction, state });
    })
  );
  disposeListeners.push(() => transport.dispose());
  return () => {
    for (const dispose of disposeListeners) {
      dispose?.();
    }
  };
};
