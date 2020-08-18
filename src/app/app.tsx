import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { renderRoutes, RouteConfig } from "react-router-config";
import BlogList from './components/BlogList/BlogList';
import BlogEditor from './components/BlogEditor/BlogEditor';
import WriterList from './components/WriterList/WriterList';
import WriterEditor from './components/WriterEditor/WriterEditor';
import Login from './components/Login';
import 'Style/app.scss';

const Root: React.FunctionComponent<any> = ({ route }: { route: RouteConfig }) => (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/blogs" className="link-button">Blogs</Link>
                </li>
                <li>
                    <Link to="/writers" className="link-button">Writers</Link>
                </li>
            </ul>
        </nav>
        <div id="mainFrame">
            {renderRoutes(route.routes)}
        </div>
    </div>
);

const routes: RouteConfig[] = [
    {
        component: Root,
        routes: [
            {
                path: "/",
                exact: true,
                component: Login
            },
            {
                path: "/blogs",
                exact: true,
                component: BlogList
            },
            {
                path: "/blogs/:id",
                component: BlogEditor
            },
            {
                path: "/writers",
                exact: true,
                component: WriterList
            },
            {
                path: "/writers/:writerName",
                component: WriterEditor
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
