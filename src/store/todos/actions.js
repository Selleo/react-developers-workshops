import * as api from '../../api';

export const ADD_TODO = 'ADD_TODO';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
});

export const fetchTodosSuccess = todos => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const fetchTodosFailure = error => ({
  type: FETCH_TODOS_FAILURE,
  payload: error,
});

export const fetchTodos = dispatch =>
  api
    .fetchTodos()
    .then(todos => dispatch(fetchTodosSuccess(todos)))
    .catch(res => dispatch(fetchTodosFailure(String(res))));
