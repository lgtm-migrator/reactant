import React, { FC } from 'react';
import { unmountComponentAtNode, render } from 'reactant-web';
// eslint-disable-next-line import/no-extraneous-dependencies
import { act } from 'react-dom/test-utils';
import {
  injectable,
  state,
  action,
  createApp,
  ViewModule,
  useConnector,
} from '..';

let container: Element;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

describe('useConnector', () => {
  test('selector for object map values', () => {
    const renderFn = jest.fn();

    @injectable()
    class FooView extends ViewModule {
      @state
      key = null;

      @action
      setValue(value: any) {
        this.key = value;
      }

      component() {
        const { key } = useConnector(() => ({ key: this.key }));
        renderFn(key);
        return null;
      }
    }

    const app = createApp({
      modules: [],
      main: FooView,
      render,
    });
    act(() => {
      app.bootstrap(container);
    });
    const subscribeFn = jest.fn();
    const unsubscribe = app.store?.subscribe(subscribeFn);

    const list = [
      'str',
      'string',
      'string',
      true,
      false,
      1,
      2,
      Symbol(''),
      Symbol(''),
    ];
    const expectedRenderCallList: any[] = [null];

    for (let i = 0; i < list.length; i += 1) {
      if (list[i] !== list[i - 1]) {
        expectedRenderCallList.push(list[i]);
      }
      app.instance.setValue(list[i]);
      expect(subscribeFn.mock.calls.length).toBe(i + 1);
      expect(renderFn.mock.calls).toEqual(
        expectedRenderCallList.map((item) => [item])
      );
    }
  });
  test('selector for primitive and null value', () => {
    const renderFn = jest.fn();

    @injectable()
    class FooView extends ViewModule {
      @state
      key = null;

      @action
      setValue(value: any) {
        this.key = value;
      }

      component() {
        const value = useConnector(() => this.key);
        renderFn(value);
        return null;
      }
    }

    const app = createApp({
      modules: [],
      main: FooView,
      render,
    });
    act(() => {
      app.bootstrap(container);
    });
    const subscribeFn = jest.fn();
    app.store?.subscribe(subscribeFn);

    const list = ['str', 'string', true, false, 1, 2, Symbol(''), Symbol('')];

    for (let i = 0; i < list.length; i += 1) {
      app.instance.setValue(list[i]);
      expect(subscribeFn.mock.calls.length).toBe(i + 1);
      expect(renderFn.mock.calls).toEqual(
        [null, ...list]
          .map((item) => [item])
          .filter((_, index) => index < i + 2)
      );
    }
  });

  test('selector with custom shallowEqual', () => {
    const renderFn = jest.fn();

    @injectable()
    class FooView extends ViewModule {
      @state
      key = null;

      @action
      setValue(value: any) {
        this.key = value;
      }

      component() {
        const value = useConnector(
          () => this.key,
          (newValue, oldValue) => {
            throw new Error(`some error`);
          }
        );
        renderFn(value);
        return null;
      }
    }

    const app = createApp({
      modules: [],
      main: FooView,
      render,
    });
    expect(() => {
      act(() => {
        app.bootstrap(container);
      });
    }).toThrow();
  });

  test('selector without store', () => {
    const renderFn = jest.fn();

    @injectable()
    class FooView extends ViewModule {
      key = null;

      setValue(value: any) {
        this.key = value;
      }

      component() {
        const value = useConnector(() => this.key);
        renderFn(value);
        return null;
      }
    }

    const app = createApp({
      modules: [],
      main: FooView,
      render,
    });
    expect(() => {
      act(() => {
        app.bootstrap(container);
      });
    }).toThrow();
  });
});
