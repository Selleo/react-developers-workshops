import * as api from '../../api';
import { createAsyncAction } from '../../utils';
import { FETCH_TODOS } from './actionTypes';

export const fetchTodos = createAsyncAction(FETCH_TODOS, api.fetchTodos);
