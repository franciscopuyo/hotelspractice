const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_RESULTS': {
      return {
        ...state,
        status: 'LOADING',
        payload: [],
      };
    }
    case 'REQUEST_RESULTS_SUCCESS': {
      return {
        status: 'SUCCESS',
        payload: action.payload.data,
      };
    }
    case 'REQUEST_RESULTS_ERROR': {
      return {
        status: 'SUCCESS',
        action: action.error,
        payload: undefined,
      };
    }
    default:
      return state;
  }
};

export default reducer;
