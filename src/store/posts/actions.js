import * as api from '../../api';
import { createAsyncAction } from '../../utils';
import { history } from '../';
import { FETCH_POSTS, FETCH_POST, UPDATE_POST } from './actionTypes';

const updatePostWithRedirect = params =>
  api.updatePost(params).then(res => {
    history.push(`/post/${res.id}`);
    return res;
  });

export const fetchPosts = createAsyncAction(FETCH_POSTS, api.fetchPosts);
export const fetchPost = createAsyncAction(FETCH_POST, api.fetchPost);
export const updatePost = createAsyncAction(
  UPDATE_POST,
  updatePostWithRedirect,
);
