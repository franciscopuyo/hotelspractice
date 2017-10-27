import { connect } from 'react-redux';
import ResultsList from './ResultsList.jsx';

const mapStateToProps = (state) => ({
  results: state.results.payload,
  status: state.results.status,
});
export default connect(mapStateToProps)(ResultsList);
