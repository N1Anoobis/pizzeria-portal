import { connect } from 'react-redux';
import WaiterOrderNew from './WaiterOrderNew';
import { getMenu, fetchMenuAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  product: getMenu(state),
//   loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchMenu: () => dispatch(fetchMenuAPI()),
//   updateStatus: (id, status) => dispatch(updateAPI(id, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WaiterOrderNew);