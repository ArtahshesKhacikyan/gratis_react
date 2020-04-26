import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import {createBrowserHistory}  from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/less/all.less';
const rootElement = document.getElementById('root');

const history = createBrowserHistory();

// eslint-disable-next-line no-unused-expressions
rootElement ? ReactDOM.render(
        <Router history={history}>
            <App history={history} />
        </Router>
    , document.getElementById('root'),
) : false;
;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
