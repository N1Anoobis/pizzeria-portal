import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { NavLink } from 'react-router-dom';
import styles from './Kitchen.module.scss';
import PropTypes from 'prop-types';

class Kitchen extends React.Component {

  static propTypes = {
    fetchOrders: PropTypes.func,
    updateStatusKitchen: PropTypes.func,
    newOrder: PropTypes.any,
    newOrderToAdd: PropTypes.any,
    checked: PropTypes.any,
    remove: PropTypes.any,
    updateWaiter: PropTypes.any,
    updateStatus: PropTypes.any,
  }

  componentDidMount() {
    this.forceUpdate();
    let { checked } = this.props;
    const { fetchOrders } = this.props;
    if (checked === false) { fetchOrders(); }
  }

  componentWillUnmount() {
    let { newOrder } = this.props;
    if (newOrder.length > 0) {
      const index = newOrder.length - 1;
      this.props.updateWaiter(newOrder[index].tableNumber, 'ordered', newOrder[index].order);
    }
  }

  render() {
    const { newOrder } = this.props;
    const { remove } = this.props;
    const { updateStatusKitchen } = this.props;
    let { newOrderToAdd } = this.props;
    const menuData = Array.from(newOrder);
    let counter = 7;
    const newOrderObj = {
      id: newOrderToAdd.currentOrder ? menuData.length + 1 : null,
      order: newOrderToAdd.currentOrder ? counter * 4 : null,
      meals: newOrderToAdd.currentOrder,
      amount: parseInt(newOrderToAdd.currentOrderNr),
      tableNumber: parseInt(newOrderToAdd.tableNr),
    };

    counter++;
    let finalData = [...menuData, newOrderObj];
   
    finalData.splice(-1, 1);
    return (
      <div className={styles.component}>
        <Paper >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Queue</TableCell>
                <TableCell>Order number</TableCell>
                <TableCell>Table number</TableCell>
                <TableCell>Meals</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Complited</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {finalData.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button variant="contained" component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.tableNumber ? row.tableNumber : null}
                  </TableCell>
                  <TableCell>
                    {row.meals}
                  </TableCell>
                  <TableCell>
                    {row.amount ? row.amount : null}
                  </TableCell>
                  <TableCell onChange={ e => { updateStatusKitchen(finalData.filter(order => order.id !== row.id));this.props.updateWaiter(row.tableNumber, 'ready', row.order); remove(row.id);} }>
                    {row.amount ? <Checkbox defaultunchecked="true" inputProps={{ 'aria-label': 'primary checkbox' }} /> : null}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>);
  }
}
export default Kitchen;

