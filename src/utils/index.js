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
