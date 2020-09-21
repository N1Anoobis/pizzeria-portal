import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, updateAPI, updateTableNr, updateWaiterPage, getKitchen} from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
  newOrder: getKitchen(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateStatus: (id, status) => dispatch(updateAPI(id, status)),
  updateTableNr: (id) => dispatch(updateTableNr(id)),
  updateWaiter: (id,status,order)=> dispatch(updateWaiterPage(id,status,order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);