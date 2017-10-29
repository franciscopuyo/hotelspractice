import { SET_FILTER_VALUE } from 'constants/actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_FILTER_VALUE: {
      return {
        ...state,
        [action.filterName]: action.value,
      };
    }
    default:
      return state;
  }
};

export default reducer;
