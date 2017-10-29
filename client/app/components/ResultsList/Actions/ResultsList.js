import hotels from 'services/hotels';

const cleanFilters = filters =>
  Object.keys(filters).reduce((cleantFilters, key) => {
    const value = filters[key];
    return value !== '' ?
      {
        ...cleantFilters,
        [key]: value,
      } : cleanFilters;
  }, {});
const requestAction = {
  type: 'REQUEST_RESULTS',
};

const getRequestErrorAction = error => ({
  type: 'REQUEST_RESULTS_ERROR',
  error,
});

const getRequestSuccessAction = payload => ({
  type: 'REQUEST_RESULTS_SUCCESS',
  payload,
});

const getHotels = () => (dispatch, getState) => {
  const { filters } = getState();
  dispatch(requestAction);
  return hotels
    .get(cleanFilters(filters))
    .then(payload => dispatch(getRequestSuccessAction(payload)))
    .catch(error => dispatch(getRequestErrorAction(error)));
};

export default { getHotels };
