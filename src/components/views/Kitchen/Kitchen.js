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
  }
  componentDidMount() {
    const { fetchOrders } = this.props;
    fetchOrders();
  }

  //  state={
  //    checked: 
  //  }

  render() {
    const { newOrder } = this.props;
    const { updateStatusKitchen } = this.props;
    let { newOrderToAdd } = this.props;
    const menuData = Array.from(newOrder);
    let counter = 7;
    // console.log(updateStatusKitchen);


    const newOrderObj = {
      id: newOrderToAdd.currentOrder ? menuData.length + 1 : null,
      order: newOrderToAdd.currentOrder ? counter * 4 : null,
      meals: newOrderToAdd.currentOrder,
      amount: parseInt(newOrderToAdd.currentOrderNr),
      tableNumber: parseInt(newOrderToAdd.tableNr),
    };

    counter++;
    let finalData = [...menuData, newOrderObj];
    console.log(finalData);
    finalData.splice(-1, 1);

    // this.handleChange = (id) => {



    //   finalData = finalData.filter(order => order.id !== id);

    //   updateStatusKitchen(finalData);
    //   console.log(finalData);
    // };
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

                 
                  <TableCell onChange={e => { updateStatusKitchen(finalData.filter(order => order.id !== row.id)); }}>
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

