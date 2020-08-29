import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, updateAPI, updateTableNr } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateStatus: (id, status) => dispatch(updateAPI(id, status)),
  updateTableNr: (id) => dispatch(updateTableNr(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);