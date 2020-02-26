/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable class-methods-use-this */
import React, { FC } from 'react';
import {
  unmountComponentAtNode,
  render,
  Link,
  Switch,
  Route,
  MemoryRouter,
} from 'reactant-web';
import { act } from 'react-dom/test-utils';
import {
  ViewModule,
  createApp,
  injectable,
  action,
  createState,
  createSelector,
  useConnector,
  dispatch,
} from '../..';
import { ReactantAction, defaultProps } from '../../src';

let container: Element;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

describe('base API', () => {
  interface AppViewProps {
    bar: string;
  }

  interface AppViewProps {
    version: string;
  }

  interface DashboardViewProps {
    version?: string;
    test?: string;
  }

  const value = 'title about app';

  @injectable()
  class Foo0 {
    name = 'Foo0';
  }

  @injectable()
  class Foo {
    constructor(public foo0: Foo0) {}

    bar = value;
  }

  @injectable()
  class DashboardView extends ViewModule {
    text = 'dashboardView';

    getProps() {
      return {
        text: this.text,
      };
    }

    @defaultProps({
      version: '0.1.0',
      test: 'test',
    })
    component(props: DashboardViewProps) {
      // check merge props with default props.
      expect(props.version).toBe('0.0.1');
      expect(props.test).toBe('test');
      const data = useConnector(() => this.getProps());
      return <span>{data.text}</span>;
    }
  }

  test('ViewModule without state', () => {
    @injectable()
    class HomeView extends ViewModule {
      text = 'homeView';

      getProps() {
        return {
          text: this.text,
        };
      }

      component() {
        const data = useConnector(() => this.getProps());
        return <span>{data.text}</span>;
      }
    }

    @injectable()
    class AppView extends ViewModule {
      constructor(
        public foo: Foo,
        public homeView: HomeView,
        public dashboardView: DashboardView
      ) {
        super();
      }

      getProps() {
        return {
          bar: this.foo.bar,
        };
      }

      component() {
        const data = useConnector(() => this.getProps());
        return (
          <MemoryRouter>
            <h1>{data.bar}</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>

            <Switch>
              <Route exact path="/">
                <this.homeView.component />
              </Route>
              <Route path="/dashboard">
                <this.dashboardView.component version="0.0.1" />
              </Route>
            </Switch>
          </MemoryRouter>
        );
      }
    }

    const app = createApp({
      modules: [],
      main: AppView,
      render,
    });
    act(() => {
      app.bootstrap(container);
    });
    expect(container.querySelector('h1')?.innerHTML).toBe(value);
    expect(container.querySelector('span')?.textContent).toBe('homeView');
    act(() => {
      container
        .querySelector('[href="/dashboard"]')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(container.querySelector('span')?.textContent).toBe('dashboardView');
  });

  test('ViewModule with state', () => {
    const renderFn = jest.fn();
    const sumComputedFn = jest.fn();
    const sum1ComputedFn = jest.fn();
    const getPropsFn = jest.fn();

    interface HomeView1Props {
      version?: string;
      text?: string;
    }

    @injectable()
    class HomeView1 extends ViewModule {
      name = 'homeView1';

      _state = {
        count: 1,
        list: [{ count: 1 }],
        list1: [{ count: 1 }],
        test: 1,
      };

      state = this._state;

      @action
      increase(num: number) {
        this.state.count += num;
      }

      @action
      decrease(num: number) {
        this.state.test -= num;
      }

      getProps() {
        getPropsFn();
        return {
          text: `${this.state.count}`,
          increase: () => this.increase(1),
          sum: this.sum,
          sum1: this.sum1,
        };
      }

      getSum = createSelector(
        () => this.state.list,
        items => {
          sumComputedFn();
          return items.reduce((sum, item) => sum + item.count, 0);
        }
      );

      get sum() {
        return this.getSum();
      }

      getSum1 = createSelector(
        () => this.state.list1,
        items => {
          sum1ComputedFn();
          return items.reduce((sum, item) => sum + item.count, 0);
        }
      );

      get sum1() {
        return this.getSum1();
      }

      component(props: HomeView1Props) {
        const data = useConnector(() => this.getProps());
        renderFn();
        return (
          <div>
            <div onClick={data.increase} id="add" />
            <span>{data.text}</span>
          </div>
        );
      }
    }

    type HomeViewProps = HomeView1Props & { s?: string };

    @injectable()
    class HomeView extends HomeView1 {
      name = 'homeView';

      @action
      increase(num: number) {
        super.increase(num);
        this.state.list[0].count += num;
      }

      state = {
        ...this._state,
        e: 1,
      };

      get props() {
        return {
          text: `${this.state.count}`,
          increase: () => this.increase(1),
          sum: this._getSum(),
          sum1: this.sum1,
          e: this.state.e,
        };
      }

      _getSum = createSelector(
        () => this.sum,
        r => {
          return r + 1;
        }
      );

      component(props: HomeViewProps) {
        return super.component(props);
      }
    }

    interface AppViewProps {
      head?: JSX.Element;
      route?: JSX.Element;
    }

    @injectable()
    class AppView extends ViewModule {
      constructor(
        public foo: Foo,
        public homeView: HomeView,
        public dashboardView: DashboardView
      ) {
        super();
      }

      get props() {
        return {
          bar: this.foo.bar,
        };
      }

      component({ head, route }: AppViewProps) {
        return (
          <MemoryRouter>
            <h1>{this.props.bar}</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {head}
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>

            <Switch>
              <Route exact path="/">
                <this.homeView.component />
              </Route>
              {route}
              <Route path="/dashboard">
                <this.dashboardView.component version="0.0.1" />
              </Route>
            </Switch>
          </MemoryRouter>
        );
      }
    }

    @injectable()
    class AppView1 extends AppView {
      constructor(
        public foo: Foo,
        public homeView: HomeView,
        public dashboardView: DashboardView,
        public homeView1: HomeView1
      ) {
        super(foo, homeView, dashboardView);
      }

      component() {
        return super.component({
          head: (
            <li>
              <Link to="/homeView1">home1</Link>
            </li>
          ),
          route: (
            <Route exact path="/homeView1">
              <this.homeView1.component />
            </Route>
          ),
        });
      }
    }

    const app = createApp({
      main: AppView,
      render,
    });

    act(() => {
      app.bootstrap(container); // init render
    });
    expect(container.querySelector('span')?.textContent).toBe('1');
    const { list } = app.store.getState().homeView;
    act(() => {
      app.instance.homeView.increase(1); // render
    });
    expect(app.store.getState().homeView.count).toBe(2);
    expect(app.instance.homeView.state.count).toBe(2);
    expect(list === app.store.getState().homeView.list).toBeFalsy();
    expect(list[0] === app.store.getState().homeView.list[0]).toBeFalsy();
    expect(container.querySelector('span')?.textContent).toBe('2');
    act(() => {
      app.instance.homeView.increase(1); // render
    });
    act(() => {
      app.instance.homeView.decrease(1);
    });
    expect(renderFn.mock.calls.length).toBe(3);
    act(() => {
      container
        .querySelector('#add')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(container.querySelector('span')?.textContent).toBe('4');
    expect(sumComputedFn.mock.calls.length).toBe(4);
    expect(sum1ComputedFn.mock.calls.length).toBe(1);
    expect(app.instance.homeView.props.sum).toBe(5);
    expect(sumComputedFn.mock.calls.length).toBe(4);
    expect(sum1ComputedFn.mock.calls.length).toBe(1);

    unmountComponentAtNode(container);
    container.remove();
    container = document.createElement('div');
    document.body.appendChild(container);

    const app1 = createApp({
      main: HomeView,
      render,
    });

    act(() => {
      app1.bootstrap(container); // init render
    });

    expect(container.querySelector('span')?.textContent).toBe('1');
    act(() => {
      container
        .querySelector('#add')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(container.querySelector('span')?.textContent).toBe('2');
    expect(renderFn.mock.calls.length).toBe(6);
    expect(sumComputedFn.mock.calls.length).toBe(6);
    expect(sum1ComputedFn.mock.calls.length).toBe(2);
    expect(app1.instance.props.sum).toBe(3);
    expect(app1.instance.state.count).toEqual(2);
    expect(app1.instance.state.list).toEqual([{ count: 2 }]);
    expect(app1.instance.state.e).toEqual(1);
    expect(app1.store.getState().homeView.e).toEqual(1);

    unmountComponentAtNode(container);
    container.remove();
    container = document.createElement('div');
    document.body.appendChild(container);

    const app2 = createApp({
      main: AppView1,
      render,
    });

    act(() => {
      app2.bootstrap(container); // init render
    });
    expect(container.querySelector('span')?.textContent).toBe('1');
    act(() => {
      app2.instance.homeView.increase(1); // render
    });
    expect(container.querySelector('span')?.textContent).toBe('2');
    act(() => {
      container
        .querySelector('#add')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(container.querySelector('span')?.textContent).toBe('3');
    expect(app2.store.getState().homeView1.count).toBe(1);
    act(() => {
      container
        .querySelector('[href="/homeView1"]')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(container.querySelector('span')?.textContent).toBe('1');
    act(() => {
      container
        .querySelector('#add')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(container.querySelector('span')?.textContent).toBe('2');
    expect(app2.store.getState().homeView.count).toBe(3);
    expect(sumComputedFn.mock.calls.length).toBe(10);
    expect(sum1ComputedFn.mock.calls.length).toBe(4);
  });

  test('ViewModule dispatch when subclassing', () => {
    @injectable()
    class HomeView1 extends ViewModule {
      name = 'homeView';

      state = {
        ...createState({
          list: (
            _state: { count: number }[] = [{ count: 1 }],
            { type, state }: ReactantAction
          ) => (type === 'homeView' ? state.list : _state),
        }),
        count: 1,
      };

      increase() {
        const state = {
          ...this.state,
          list: [
            {
              count: this.state.list![0].count + 1,
            },
            ...this.state.list!.slice(1, -1),
          ],
        };
        dispatch(this, {
          state,
        });
      }

      @action
      add() {
        this.state.count += 1;
      }

      getData() {
        return {
          text: this.state.list![0].count,
          increase: () => this.increase(),
        };
      }

      @defaultProps({
        version: '0.1.0',
        test: 'test',
      })
      component(props: { version?: string; test?: string }) {
        const data = useConnector(() => this.getData());
        return (
          <div>
            <div onClick={data.increase} id="add" />
            <span>{data.text}</span>
          </div>
        );
      }
    }

    @injectable()
    class HomeView extends HomeView1 {
      increase() {
        super.increase();
        dispatch(this, {
          state: {
            ...this.state,
            list: [
              {
                count: this.state.list![0].count + 1,
              },
              ...this.state.list!.slice(1, -1),
            ],
          },
        });
      }
    }

    const app = createApp({
      modules: [],
      main: HomeView,
      render,
    });
    act(() => {
      app.bootstrap(container);
    });
    expect(container.textContent).toBe('1');
    act(() => {
      container
        .querySelector('#add')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(container.textContent).toBe('3');
  });
});