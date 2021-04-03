import {
  injectable,
  createContainer,
  dispatch,
  state,
  createStore,
  ReactantAction,
  createState,
  identifierKey,
  Service,
} from '../..';

test('`dispatch` without action type', () => {
  @injectable()
  class Counter {
    @state
    count = 0;

    increase() {
      dispatch(this, {
        state: {
          count: this.count + 1,
        },
      });
    }
  }
  const ServiceIdentifiers = new Map();
  const modules = [Counter];
  const container = createContainer({
    ServiceIdentifiers,
    modules,
    options: {
      defaultScope: 'Singleton',
    },
  });
  const counter = container.get(Counter);
  const store = createStore(
    modules,
    container,
    ServiceIdentifiers,
    new Set(),
    (...args: any[]) => {},
    {
      middleware: [],
      beforeCombineRootReducers: [],
      afterCombineRootReducers: [],
      enhancer: [],
      preloadedStateHandler: [],
      afterCreateStore: [],
      provider: [],
    }
  );
  counter.increase();
  expect(counter.count).toBe(1);
  expect(Object.values(store.getState())).toEqual([{ count: 1 }]);
});

test('`dispatch` with action type', () => {
  const type = 'count_increase';

  @injectable()
  class Counter {
    @state
    sum = 0;

    @state
    count = createState<number, ReactantAction>((_state = 0, _action) =>
      _action.type === type
        ? _action.state[(this as Service)[identifierKey]!].count
        : _state
    );

    increase() {
      dispatch(this, {
        type,
        state: {
          count: this.count + 1,
        },
      });
    }
  }
  const ServiceIdentifiers = new Map();
  const modules = [Counter];
  const container = createContainer({
    ServiceIdentifiers,
    modules,
    options: {
      defaultScope: 'Singleton',
    },
  });
  const counter = container.get(Counter);
  const store = createStore(
    modules,
    container,
    ServiceIdentifiers,
    new Set(),
    (...args: any[]) => {},
    {
      middleware: [],
      beforeCombineRootReducers: [],
      afterCombineRootReducers: [],
      enhancer: [],
      preloadedStateHandler: [],
      afterCreateStore: [],
      provider: [],
    }
  );
  counter.increase();
  expect(counter.count).toBe(1);
  expect(Object.values(store.getState())).toEqual([{ count: 1, sum: 0 }]);
});
