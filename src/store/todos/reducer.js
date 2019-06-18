import { ADD_TODO } from './actions';

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
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
