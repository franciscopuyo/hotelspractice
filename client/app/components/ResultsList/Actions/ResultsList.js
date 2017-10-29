import hotels from 'services/hotels';
import { REQUEST_RESULTS, REQUEST_RESULTS_SUCCESS, REQUEST_RESULTS_ERROR } from 'constants/actions';

const cleanFilters = filters =>
  Object.keys(filters).reduce((cleantFilters, key) => {
    const value = filters[key];
    if (value !== '') {
      return {
        ...cleantFilters,
        [key]: value,
      };
    }
    return cleantFilters;
  }, {});

const requestAction = {
  type: REQUEST_RESULTS,
};

const getRequestErrorAction = error => ({
  type: REQUEST_RESULTS_ERROR,
  error,
});

const getRequestSuccessAction = payload => ({
  type: REQUEST_RESULTS_SUCCESS,
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
