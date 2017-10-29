import { connect } from 'react-redux';
import actions from 'components/FilterPanel/Actions';
import SingleTextFilter from './SingleTextFilter';

const makeMapStateToProps = (firstState, ownProps) => state => ({
  value: state.filters[ownProps.name],
});
export default connect(makeMapStateToProps, actions)(SingleTextFilter);
