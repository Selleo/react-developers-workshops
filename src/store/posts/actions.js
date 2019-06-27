import * as api from '../../api';
import { history } from '../';

export const FETCH_POSTS_STARTED = 'posts/FETCH_STARTED';
export const FETCH_POSTS_SUCCESS = 'posts/FETCH_SUCCESS';
export const FETCH_POSTS_FAILURE = 'posts/FETCH_FAILURE';
export const FETCH_POST_STARTED = 'post/FETCH_STARTED';
export const FETCH_POST_SUCCESS = 'post/FETCH_SUCCESS';
export const FETCH_POST_FAILURE = 'post/FETCH_FAILURE';
export const UPDATE_POST_STARTED = 'post/UPDATE_STARTED';
export const UPDATE_POST_SUCCESS = 'post/UPDATE_SUCCESS';
export const UPDATE_POST_FAILURE = 'post/UPDATE_FAILURE';

export const fetchPostsStarted = () => ({
  type: FETCH_POSTS_STARTED,
});

export const fetchPostsSuccess = todos => ({
  type: FETCH_POSTS_SUCCESS,
  payload: todos,
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const fetchPostStarted = params => ({
  type: FETCH_POST_STARTED,
  payload: params,
});

export const fetchPostSuccess = todo => ({
  type: FETCH_POST_SUCCESS,
  payload: todo,
});

export const fetchPostFailure = error => ({
  type: FETCH_POST_FAILURE,
  payload: error,
});

export const updatePostStarted = params => ({
  type: UPDATE_POST_STARTED,
  payload: params,
});

export const updatePostSuccess = todo => ({
  type: UPDATE_POST_SUCCESS,
  payload: todo,
});

export const updatePostFailure = (id, errors) => ({
  type: UPDATE_POST_FAILURE,
  payload: { id, errors },
});

export const fetchPosts = dispatch => params => {
  dispatch(fetchPostsStarted());

  return api
    .fetchPosts(params)
    .then(todos => dispatch(fetchPostsSuccess(todos)))
    .catch(res => dispatch(fetchPostsFailure(String(res))));
};

export const fetchPost = dispatch => params => {
  dispatch(fetchPostStarted(params));

  return api
    .fetchPost(params)
    .then(todo => dispatch(fetchPostSuccess(todo)))
    .catch(res => dispatch(fetchPostFailure(String(res))));
};

const normalizeErrors = res => {
  const errors = {};
  res.response.data.errors.forEach(
    ({ field, messages }) => (errors[field] = messages),
  );
  return errors;
};

export const updatePost = dispatch => params => {
  dispatch(updatePostStarted(params));

  return api
    .updatePost(params)
    .then(todo => {
      dispatch(updatePostSuccess(todo));
      history.push(`/post/${todo.id}`);
    })
    .catch(res => dispatch(updatePostFailure(params.id, normalizeErrors(res))));
};
