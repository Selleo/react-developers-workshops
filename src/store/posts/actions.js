import * as api from '../../api';

export const FETCH_POSTS_STARTED = 'posts/FETCH_STARTED';
export const FETCH_POSTS_SUCCESS = 'posts/FETCH_SUCCESS';
export const FETCH_POSTS_FAILURE = 'posts/FETCH_FAILURE';

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

export const fetchPosts = dispatch => params => {
  dispatch(fetchPostsStarted());

  return api
    .fetchPosts(params)
    .then(todos => dispatch(fetchPostsSuccess(todos)))
    .catch(res => dispatch(fetchPostsFailure(String(res))));
};
