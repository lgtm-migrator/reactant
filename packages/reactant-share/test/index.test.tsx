import React from 'react';
import { mockPairPorts } from 'data-transport';
import { unmountComponentAtNode, render } from 'reactant-web';
// eslint-disable-next-line import/no-extraneous-dependencies
import { act } from 'react-dom/test-utils';
import {
  injectable,
  state,
  action,
  ViewModule,
  useConnector,
  subscribe,
  createApp,
  proxify,
  PortDetector,
  createTransport,
} from '..';

let serverContainer: Element;
let clientContainer: Element;

beforeEach(() => {
  serverContainer = document.createElement('div');
  document.body.appendChild(serverContainer);
  clientContainer = document.createElement('div');
  document.body.appendChild(clientContainer);
});

afterEach(() => {
  unmountComponentAtNode(serverContainer);
  serverContainer.remove();
  unmountComponentAtNode(clientContainer);
  clientContainer.remove();
});

describe('useConnector', () => {
  @injectable()
  class Counter {
    name = 'counter';

    constructor(private portDetector: PortDetector) {
      this.portDetector.onClient(() => {
        console.log('client ====');
        return subscribe(this, () => {
          console.log('client ====');
        });
      });
      this.portDetector.onServer(() => {
        console.log('server ====');
        return subscribe(this, () => {
          console.log('server ====');
        });
      });
    }

    @state
    count = 0;

    @action
    increase() {
      this.count += 1;
    }

    @action
    decrease() {
      this.count -= 1;
    }
  }

  @injectable()
  class AppView extends ViewModule {
    name = 'appView';

    constructor(public counter: Counter) {
      super();
    }

    @proxify
    async decrease() {
      return this.counter.decrease();
    }

    @proxify
    async increase() {
      return this.counter.increase();
    }

    component() {
      const count = useConnector(() => this.counter.count);
      return (
        <>
          <button id="decrease" type="button" onClick={() => this.decrease()}>
            -
          </button>
          <div id="count">{count}</div>
          <button id="increase" type="button" onClick={() => this.increase()}>
            +
          </button>
        </>
      );
    }
  }
  test('selector for object map values', async () => {
    const ports = mockPairPorts();

    const serverApp = await createApp({
      modules: [],
      main: AppView,
      render,
      share: {
        name: 'counter',
        type: 'Base',
        port: 'server',
        transports: {
          server: createTransport('Base', ports[0]),
        },
      },
    });
    act(() => {
      serverApp.bootstrap(serverContainer);
    });
    expect(serverContainer.querySelector('#count')?.textContent).toBe('0');

    const clientApp = await createApp({
      modules: [],
      main: AppView,
      render,
      share: {
        name: 'counter',
        type: 'Base',
        port: 'client',
        transports: {
          client: createTransport('Base', ports[1]),
        },
      },
    });
    act(() => {
      clientApp.bootstrap(clientContainer);
    });
    expect(clientContainer.querySelector('#count')?.textContent).toBe('0');

    act(() => {
      serverContainer
        .querySelector('#increase')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(serverContainer.querySelector('#count')?.textContent).toBe('1');
    expect(clientContainer.querySelector('#count')?.textContent).toBe('1');

    act(() => {
      clientContainer
        .querySelector('#increase')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(serverContainer.querySelector('#count')?.textContent).toBe('2');
    expect(clientContainer.querySelector('#count')?.textContent).toBe('2');
  });
});
