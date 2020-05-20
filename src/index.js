import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reduxStore } from './reduxStore';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import { Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';

import rootReducer from './stores/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/less/all.less';

reduxStore.store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));
const rootElement = document.getElementById('root');

export const history = createBrowserHistory();

// eslint-disable-next-line no-unused-expressions
rootElement ? ReactDOM.render(
    <Provider store={reduxStore.store}>
        <Router history={history}>
            <App history={history} />
        </Router>
    </Provider>, document.getElementById('root'),
) : false;