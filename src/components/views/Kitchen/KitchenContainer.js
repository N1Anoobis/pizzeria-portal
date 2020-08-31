import { connect } from 'react-redux';
import Kitchen from './Kitchen';
import { getKitchen, fetchKitchenAPI,getLoadingState, placeNewOrder, updateStateKitchen } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  newOrder: getKitchen(state),
  loading: getLoadingState(state),
  newOrderToAdd: placeNewOrder(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchKitchenAPI()),
  // fetchTables: () => dispatch(fetchFromAPI()),
  updateStatusKitchen: (array) => dispatch(updateStateKitchen(array)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);