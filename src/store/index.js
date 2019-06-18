import { createStore, combineReducers } from 'redux';

import todos from './todos/reducer';
import counter from './counter';

export default createStore(
  combineReducers({ todos, counter }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
