import { keyBy } from 'lodash';

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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS.STARTED:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        },
      };
    case FETCH_POSTS.SUCCESS:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...keyBy(action.payload, 'id'),
        },
        list: {
          ids: action.payload.map(({ id }) => id),
          loading: false,
          error: null,
        },
      };
    case FETCH_POSTS.FAILURE:
      return {
        ...state,
        list: {
          ids: [],
          loading: false,
          error: action.payload,
        },
      };
    case FETCH_POST.STARTED:
    case UPDATE_POST.STARTED:
      return {
        ...state,
        loadingById: {
          ...state.loadingById,
          [action.payload.id]: true,
        },
      };
    case FETCH_POST.SUCCESS:
    case UPDATE_POST.SUCCESS:
      return {
        ...state,
        loadingById: {
          ...state.loadingById,
          [action.payload.id]: false,
        },
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
      };
    case UPDATE_POST.FAILURE:
      return {
        ...state,
        loadingById: {
          ...state.loadingById,
          [action.payload.id]: false,
        },
        errorsById: {
          ...state.errorsById,
          [action.payload.id]: action.payload.errors,
        },
      };
    default:
      return state;
  }
};

export default reducer;
