import hotels from 'services/hotels';

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
  dispatch(requestAction);
  return hotels
    .get(getState().filters)
    .then(payload => dispatch(getRequestSuccessAction(payload)))
    .catch(error => dispatch(getRequestErrorAction(error)));
};

export default { getHotels };
