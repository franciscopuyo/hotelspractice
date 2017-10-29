import { connect } from 'react-redux';
import actions from 'components/FilterPanel/Actions';
import StarFilter from './StarFilter';

const makeMapStateToProps = (firstState, ownProps) => state => ({
  value: state.filters[ownProps.name],
});
export default connect(makeMapStateToProps, actions)(StarFilter);
