import { connect } from 'react-redux';
import WaiterOrderNew from './WaiterOrderNew';
import { getMenu, fetchMenuAPI, currentTableNr, currentOrderAPI, currentOrder, currentOrderNr, currentOrderAPINr, placeOrderApi, getKitchen, updateWaiterPage} from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  product: getMenu(state),
  tableNr: currentTableNr(state),
  currentOrder: currentOrder(state),
  currentOrderNr: currentOrderNr(state),
  newOrder: getKitchen(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchMenu: () => dispatch(fetchMenuAPI()),
  fetchcurrentOrder: (order) => dispatch(currentOrderAPI(order)),
  fetchcurrentOrderNr: (order) => dispatch(currentOrderAPINr(order)),
  placeOrder: (tableNr, currentOrder, currentOrderNr) => dispatch(placeOrderApi(tableNr, currentOrder, currentOrderNr)),
  updateWaiter: (id,status,order)=> dispatch(updateWaiterPage(id,status,order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WaiterOrderNew);