import resultsListActions from 'components/ResultsList/Actions/ResultsList';

const getSetFilterValueAction = (filterName, value) => ({
  type: 'SET_FILTER_VALUE',
  filterName,
  value,
});

const setFilterValue = (filterName, value) => (dispatch) => {
  dispatch(getSetFilterValueAction(filterName, value))
  dispatch(resultsListActions.getHotels());
};

export default {
  setFilterValue,
};