import { connect } from 'react-redux';
import actions from 'components/FilterPanel/Actions/FilterPanel';
import SingleTextFilter from './SingleTextFilter.jsx';

const makeMapStateToProps = (state, ownProps) => {
  return state => ({
    value: state.filters[ownProps.name],
  });
};
export default connect(makeMapStateToProps, actions)(SingleTextFilter);
