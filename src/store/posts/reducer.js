import produce from 'immer';

import { FETCH_POSTS, FETCH_POST, UPDATE_POST } from './actionTypes';
import { asyncFetchListReducer, asyncFetchReducer } from '../../utils'

const initialState = {
  byId: {},
  loadingById: {},
  errorsById: {},
  list: {
    ids: [],
    error: null,
    loading: null,
  },
};

export const reducer = produce((state = initialState, action) => {
  asyncFetchListReducer(FETCH_POSTS)(state, action);
  asyncFetchReducer(FETCH_POST)(state, action);
  asyncFetchReducer(UPDATE_POST)(state, action);

  return state;
});

export default reducer;
