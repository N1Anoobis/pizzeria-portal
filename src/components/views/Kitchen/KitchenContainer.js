import { connect } from 'react-redux';
import Kitchen from './Kitchen';
import { getKitchen, fetchKitchenAPI,getLoadingState, placeNewOrder, updateStateKitchen, getChecked, updateCheckedState,removeKitchenOrder} from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  newOrder: getKitchen(state),
  loading: getLoadingState(state),
  newOrderToAdd: placeNewOrder(state),
  checked: getChecked(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchKitchenAPI()),
  // fetchTables: () => dispatch(fetchFromAPI()),
  updateStatusKitchen: (id) => dispatch(updateStateKitchen(id)),
  updateChecked: (bool) => dispatch(updateCheckedState(bool)),
  remove: (id)=> dispatch(removeKitchenOrder(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);