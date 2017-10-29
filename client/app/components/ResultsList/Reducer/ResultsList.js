import { REQUEST_RESULTS, REQUEST_RESULTS_SUCCESS, REQUEST_RESULTS_ERROR } from 'constants/actions';
import { LOADING, SUCCESS, ERROR } from 'constants/statuses';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_RESULTS: {
      return {
        ...state,
        status: LOADING,
        payload: [],
      };
    }
    case REQUEST_RESULTS_SUCCESS: {
      return {
        status: SUCCESS,
        payload: action.payload.data,
      };
    }
    case REQUEST_RESULTS_ERROR: {
      return {
        status: ERROR,
        action: action.error,
        payload: undefined,
      };
    }
    default:
      return state;
  }
};

export default reducer;
