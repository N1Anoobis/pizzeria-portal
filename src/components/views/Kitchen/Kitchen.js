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
    newOrder: PropTypes.any,
    newOrderToAdd: PropTypes.any,
  }
  componentDidMount(){
    const { fetchOrders} = this.props;
    fetchOrders();
  }
  // newOrderToAdd
  render() {
    const { newOrder } = this.props;
    const { newOrderToAdd } = this.props;
    const menuData = Array.from(newOrder);
    console.log(newOrderToAdd);
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
              {menuData.map(row => (
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
                    {row.tableNumber}
                  </TableCell>
                  <TableCell>
                    {row.meals}
                  </TableCell>
                  <TableCell>
                    {row.amount}
                  </TableCell>
                  <TableCell>
                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
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

