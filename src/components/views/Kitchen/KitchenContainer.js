import { connect } from 'react-redux';
import Kitchen from './Kitchen';
import { getKitchen, fetchKitchenAPI,getLoadingState, placeNewOrder, updateStateKitchen, getChecked, removeKitchenOrder, updateWaiterPage } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  newOrder: getKitchen(state),
  loading: getLoadingState(state),
  newOrderToAdd: placeNewOrder(state),
  checked: getChecked(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchKitchenAPI()),
  updateStatusKitchen: (id) => dispatch(updateStateKitchen(id)),
  remove: (id)=> dispatch(removeKitchenOrder(id)),
  updateWaiter: (id,status,order)=> dispatch(updateWaiterPage(id,status,order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);