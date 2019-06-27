import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import todos from './todos/reducer';
import posts from './posts/reducer';
import counter from './counter';

export const history = createBrowserHistory();

export default createStore(
  combineReducers({ todos, posts, counter }),
  composeWithDevTools(applyMiddleware(thunk)),
);
