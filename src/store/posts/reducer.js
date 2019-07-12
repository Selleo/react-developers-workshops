import { keyBy } from 'lodash';
import produce from 'immer';

import { FETCH_POSTS, FETCH_POST, UPDATE_POST } from './actionTypes';

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
  switch (action.type) {
    case FETCH_POSTS.STARTED:
      state.list.loading = true;
      return;
    case FETCH_POSTS.SUCCESS:
      state.byId = {
        ...state.byId,
        ...keyBy(action.payload, 'id'),
      };
      state.list = {
        ids: action.payload.map(({ id }) => id),
        loading: false,
        error: null,
      };
      return;
    case FETCH_POSTS.FAILURE:
      state.list = {
        ids: [],
        loading: false,
        error: action.payload,
      };
      return;
    case FETCH_POST.STARTED:
    case UPDATE_POST.STARTED:
      state.loadingById[action.payload.id] = true;
      return;
    case FETCH_POST.SUCCESS:
    case UPDATE_POST.SUCCESS:
      state.loadingById[action.payload.id] = false;
      state.byId[action.payload.id] = action.payload;
      return;
    case UPDATE_POST.FAILURE:
      state.loadingById[action.payload.id] = false;
      state.errorsById[action.payload.id] = action.payload.errors;
      return;
    default:
      return state;
  }
});

export default reducer;
