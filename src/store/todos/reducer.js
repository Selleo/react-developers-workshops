import produce from 'immer';

import { FETCH_TODOS } from './actionTypes';
import { asyncFetchListReducer } from '../../utils';

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
  asyncFetchListReducer(FETCH_TODOS)(state, action);

  return state;
});

export default reducer;
