import { connect } from 'react-redux';
import actions from 'components/FilterPanel/Actions/FilterPanel';
import StarFilter from './StarFilter.jsx';

const makeMapStateToProps = (state, ownProps) => state => ({
  value: state.filters[ownProps.name],
});
export default connect(makeMapStateToProps, actions)(StarFilter);
