import { keyBy } from 'lodash';

import {
  FETCH_TODOS_STARTED,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_SUCCESS,
} from './actions';

const initialState = {
  byId: {
    1: {
      id: 1,
      text: 'Todo 1',
    },
    2: {
      id: 2,
      text: 'Todo 2',
    },
  },
  list: {
    ids: [2, 1],
    error: null,
    loading: null,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_STARTED:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        },
      };
    case FETCH_TODOS_SUCCESS:
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
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        list: {
          ids: [],
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
