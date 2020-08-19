import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { renderRoutes, RouteConfig } from "react-router-config";
import ArticleListPage from './components/ArticleList/ArticleList';
import ArticleEditorPage from './components/ArticleEditor/ArticleEditor';
import WriterListPage from './components/WriterList/WriterList';
import WriterEditorPage from './components/WriterEditor/WriterEditor';
import LoginPage from './components/Login';
import 'Styles/app.scss';

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
                component: LoginPage
            },
            {
                path: "/blogs",
                exact: true,
                component: ArticleListPage
            },
            {
                path: "/blogs/:id",
                component: ArticleEditorPage
            },
            {
                path: "/writers",
                exact: true,
                component: WriterListPage
            },
            {
                path: "/writers/:writerName",
                component: WriterEditorPage
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
