import resultsListActions from 'components/ResultsList/Actions';
import { SET_FILTER_VALUE } from 'constants/actions';

const getSetFilterValueAction = (filterName, value) => ({
  type: SET_FILTER_VALUE,
  filterName,
  value,
});

const setFilterValue = (filterName, value) => (dispatch) => {
  dispatch(getSetFilterValueAction(filterName, value));
  dispatch(resultsListActions.getHotels());
};

export default {
  setFilterValue,
};
