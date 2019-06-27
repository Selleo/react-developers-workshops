import { keyBy } from 'lodash';

import {
  FETCH_POSTS_STARTED,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_STARTED,
  FETCH_POST_SUCCESS,
  UPDATE_POST_STARTED,
  UPDATE_POST_SUCCESS,
} from './actions';

const initialState = {
  byId: {},
  loadingById: {},
  list: {
    ids: [],
    error: null,
    loading: null,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_STARTED:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        },
      };
    case FETCH_POSTS_SUCCESS:
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
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        list: {
          ids: [],
          loading: false,
          error: action.payload,
        },
      };
    case FETCH_POST_STARTED:
    case UPDATE_POST_STARTED:
      return {
        ...state,
        loadingById: {
          ...state.loadingById,
          [action.payload.id]: true,
        },
      };
    case FETCH_POST_SUCCESS:
    case UPDATE_POST_SUCCESS:
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
    default:
      return state;
  }
};

export default reducer;
