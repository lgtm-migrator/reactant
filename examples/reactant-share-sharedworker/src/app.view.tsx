/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, FunctionComponent } from 'react';
import { Switch, Route } from 'reactant-web';
import { Router } from 'reactant-router';
import {
  optional,
  proxify,
  ViewModule,
  injectable,
  PortDetector,
  useConnector,
} from 'reactant-share';
import { TodoListView } from './todoList.view';
import { CounterView } from './counter.view';

const Link: FunctionComponent<{ active: boolean; onClick: () => any }> = ({
  active,
  children,
  onClick,
}) => {
  return (
    <div onClick={onClick} style={{ color: active ? 'red' : 'black' }}>
      {children}
    </div>
  );
};

@injectable()
export class AppView extends ViewModule {
  name = 'appView';

  type = '';

  push?: (path: string) => void;

  setType?: React.Dispatch<React.SetStateAction<string>>;

  constructor(
    private todoListView: TodoListView,
    private counterView: CounterView,
    private portDetector: PortDetector,
    @optional(Router) private router?: Router
  ) {
    super();
    this.portDetector.onServer((transport: any) => {
      this.type = 'Server';
      this.setType?.('Server');
      let currentPath: string;
      this.push = (path: string) => {
        currentPath = path;
        transport.emit({ name: 'routerChange', respond: false }, path);
      };
      transport.listen('initRouter', async () => currentPath);
    });
    this.portDetector.onClient((transport: any) => {
      this.type = 'Client';
      transport.listen('routerChange', (path: string) => {
        this.router?.history.push(path);
      });
      transport.emit('initRouter').then((path: string) => {
        this.router?.history.push(path);
      });
    });
  }

  @proxify
  async routerChange(path: string) {
    this.push?.(path);
  }

  component() {
    const [type, setType] = useState(this.type);
    const currentPath = useConnector(() => this.router?.currentPath);
    this.setType = setType;
    return (
      <>
        <ul>
          <li>
            <Link
              active={currentPath === '/'}
              onClick={() => this.routerChange('/')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              active={currentPath === this.counterView.path}
              onClick={() => this.routerChange(this.counterView.path)}
            >
              {this.counterView.name}
            </Link>
          </li>
          <li>
            <Link
              active={currentPath === this.todoListView.path}
              onClick={() => this.routerChange(this.todoListView.path)}
            >
              {this.todoListView.name}
            </Link>
          </li>
          <li>
            <Link
              active={currentPath === '/iframe'}
              onClick={() => this.routerChange('/iframe')}
            >
              iFrame mode
            </Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <h2 style={{ color: type === 'Server' ? 'red' : 'green' }}>
              {`This app is a ${type}`}
            </h2>
          </Route>
          <Route
            path={this.counterView.path}
            component={this.counterView.component}
          />
          <Route
            path={this.todoListView.path}
            component={this.todoListView.component}
          />
          <Route path="/iframe">
            <iframe
              title="iFrame mode"
              src="http://localhost:7000/iframe.html"
            />
          </Route>
        </Switch>
      </>
    );
  }
}
