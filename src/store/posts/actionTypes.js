import { createAsyncActionTypes } from '../../utils';

export const FETCH_POSTS = createAsyncActionTypes('FETCH', 'posts');
export const FETCH_POST = createAsyncActionTypes('FETCH', 'post');
export const UPDATE_POST = createAsyncActionTypes('UPDATE', 'post');
