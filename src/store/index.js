import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import todos from './todos/reducer';
import counter from './counter';

export default createStore(
  combineReducers({ todos, counter }),
  composeWithDevTools(applyMiddleware(thunk)),
);
