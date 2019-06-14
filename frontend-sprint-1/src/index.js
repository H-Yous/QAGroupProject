import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { env } from './config';
import { ReactReduxContext } from 'react-redux'
import { Provider } from 'react-redux'
import {browserHistory} from 'react-router';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from './redux/reducers';
import createSagaMiddleware from 'redux-saga';

import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux';

import {createStore, applyMiddleware} from 'redux';

const reduxLoggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    sagaMiddleware,
    reduxLoggerMiddleware,
    routerMiddleware(browserHistory)
  )(createStore);

const store = createStoreWithMiddleware(reducers);


ReactDOM.render(<Provider store={store}><App /></Provider>,  document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
