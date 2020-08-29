import { connect } from 'react-redux';
import WaiterOrderNew from './WaiterOrderNew';
import { getMenu, fetchMenuAPI, currentTableNr, currentOrderAPI, currentOrder, currentOrderNr, currentOrderAPINr} from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  product: getMenu(state),
  tableNr: currentTableNr(state),
  currentOrder: currentOrder(state),
  currentOrderNr: currentOrderNr(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchMenu: () => dispatch(fetchMenuAPI()),
  fetchcurrentOrder: (order) => dispatch(currentOrderAPI(order)),
  fetchcurrentOrderNr: (order) => dispatch(currentOrderAPINr(order)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(WaiterOrderNew);