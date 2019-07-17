import { keyBy } from 'lodash';
import produce from 'immer';

export const createAsyncActionTypes = (actionName, resource) =>
  ['STARTED', 'FAILURE', 'SUCCESS'].reduce(
    (acc, status) => ({
      ...acc,
      [status]: `@@${resource}/${actionName}/${status}`,
    }),
    {},
  );

const normalizeErrors = res => {
  const errors = {};
  res.response.data.errors.forEach(
    ({ field, messages }) => (errors[field] = messages),
  );
  return errors;
};

export const createAsyncAction = (
  { STARTED, SUCCESS, FAILURE },
  asyncFn,
) => dispatch => params => {
  dispatch({ type: STARTED, payload: params });
  return asyncFn(params)
    .then(response => {
      dispatch({ type: SUCCESS, payload: response });
      return response;
    })
    .catch(response => {
      const errors = normalizeErrors(response);
      dispatch({ type: FAILURE, payload: { id: params.id, errors } });
    });
};

export const asyncFetchListReducer = ({ STARTED, SUCCESS, FAILURE }) =>
  produce((state, action) => {
    switch (action.type) {
      case STARTED:
        state.list.loading = true;
        return;
      case SUCCESS:
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
      case FAILURE:
        state.list = {
          ids: [],
          loading: false,
          error: action.payload,
        };
        return;
      default:
        return;
    }
  });

export const asyncFetchReducer = ({ STARTED, SUCCESS, FAILURE }) =>
  produce((state, action) => {
    switch (action.type) {
      case STARTED:
        state.loadingById[action.payload.id] = true;
        delete state.errorsById[action.payload.id];
        return;
      case SUCCESS:
        state.loadingById[action.payload.id] = false;
        state.byId[action.payload.id] = action.payload;
        return;
      case FAILURE:
        state.loadingById[action.payload.id] = false;
        state.errorsById[action.payload.id] = action.payload.errors
          ? action.payload.errors
          : action.payload;
        return;
      default:
        return;
    }
  });
