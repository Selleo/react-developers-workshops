import * as api from '../../api';

export const FETCH_TODOS_STARTED = 'todos/FETCH_STARTED';
export const FETCH_TODOS_SUCCESS = 'todos/FETCH_SUCCESS';
export const FETCH_TODOS_FAILURE = 'todos/FETCH_FAILURE';

export const fetchTodosStarted = () => ({
  type: FETCH_TODOS_STARTED,
});

export const fetchTodosSuccess = todos => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const fetchTodosFailure = error => ({
  type: FETCH_TODOS_FAILURE,
  payload: error,
});

export const fetchTodos = dispatch => {
  dispatch(fetchTodosStarted());

  return api
    .fetchTodos()
    .then(todos => dispatch(fetchTodosSuccess(todos)))
    .catch(res => dispatch(fetchTodosFailure(String(res))));
};
