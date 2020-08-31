import { connect } from 'react-redux';
import Kitchen from './Kitchen';
import { getKitchen, fetchKitchenAPI,getLoadingState, placeNewOrder, updateStateKitchen, getChecked, updateCheckedState} from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  newOrder: getKitchen(state),
  loading: getLoadingState(state),
  newOrderToAdd: placeNewOrder(state),
  checked: getChecked(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchKitchenAPI()),
  // fetchTables: () => dispatch(fetchFromAPI()),
  updateStatusKitchen: (array) => dispatch(updateStateKitchen(array)),
  updateChecked: (bool) => dispatch(updateCheckedState(bool)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);