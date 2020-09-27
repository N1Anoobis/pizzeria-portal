import { connect } from 'react-redux';
import Kitchen from './Kitchen';
import { getKitchen, fetchKitchenAPI,getLoadingState, placeNewOrder, updateStateKitchen, getChecked, updateCheckedState,removeKitchenOrder, updateWaiterPage } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  newOrder: getKitchen(state),
  loading: getLoadingState(state),
  newOrderToAdd: placeNewOrder(state),
  checked: getChecked(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchKitchenAPI()),
  updateStatusKitchen: (id) => dispatch(updateStateKitchen(id)),
  updateChecked: (bool) => dispatch(updateCheckedState(bool)),
  remove: (id)=> dispatch(removeKitchenOrder(id)),
  updateWaiter: (id,status,order)=> dispatch(updateWaiterPage(id,status,order)),
  // updateStatus: (id, status) => dispatch(updateWaiterPage(id, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);