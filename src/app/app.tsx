import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { renderRoutes, RouteConfig } from "react-router-config";
import Game from './components/Game';
import Hello from './components/Hello';
import '../stylesheet/app.scss';

const Root: React.FunctionComponent<any> = ({ route }: { route: RouteConfig }) => (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Hello</Link>
                </li>
                <li>
                    <Link to="/game">Game</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
        {renderRoutes(route.routes)}
    </div>
);

const Users = (_: unknown) => <h2>Users</h2>;

const routes: RouteConfig[] = [
    {
        component: Root,
        routes: [
            {
                path: "/",
                exact: true,
                component: Hello
            },
            {
                path: "/game",
                exact: true,
                component: Game
            },
            {
                path: "/users",
                exact: true,
                component: Users
            }
        ]
    }
];

ReactDOM.render(
    <Router>
        {renderRoutes(routes)}
    </Router>,
    document.getElementById('root')
);
