import { keyBy } from 'lodash';

import { ADD_TODO, FETCH_TODOS_FAILURE, FETCH_TODOS_SUCCESS } from './actions';

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
  list: [2, 1],
  listError: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return {
        byId: {
          ...state.byId,
          ...keyBy(action.payload, 'id'),
        },
        list: action.payload.map(todo => todo.id),
      };
    case FETCH_TODOS_FAILURE:
      return {
        list: [],
        listError: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
        list: [action.payload.id, ...state.list],
      };
    default:
      return state;
  }
};

export default reducer;
