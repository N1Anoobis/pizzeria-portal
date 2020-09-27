import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    tables: PropTypes.any,
    updateTableNr: PropTypes.func,
    updateStatus: PropTypes.func,
    updateWaiter: PropTypes.func,
    newOrder: PropTypes.any,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  }

  componentDidMount() {
    this.forceUpdate();
    const { fetchTables } = this.props;
    // const { newOrder } = this.props;
    // const { tables } = this.props;
    fetchTables();
    // this.tablezArray = [];
    // const ordersArray = [];
    
    // for (const key in tables) {
    //   if (Object.prototype.hasOwnProperty.call(tables, key)) {
    //     const element = tables[key];
    //     if (element['order']) {
    //       this.tablezArray.push(parseInt(element['id']));

    //     }
    //   }
    // }
  
    // console.log('tables', tables);
    // for (const key in newOrder) {
    //   if (Object.prototype.hasOwnProperty.call(tables, key)) {
    //     const element = newOrder[key];
    //     ordersArray.push(element['tableNumber']);
    //   }
    // }
    // // console.log('ordersarray',ordersArray);
    // this.tablezArray = this.tablezArray.filter(val => !ordersArray.includes(val));

    // if (this.tablezArray.length > 0) {
    //   this.informWaiter = this.tablezArray;

    // }
  }
  componentDidUpdate() {
    // this.informWaiter = '';
  }
  resetWaiterInfo() {
    this.informWaiter = '';
    console.log('opalone reset');

    this.tablezArray = '';
    this.forceUpdate();
  }

  renderActions(id, status) {
    const { updateStatus } = this.props;
    const { updateTableNr } = this.props;
    const { updateWaiter } = this.props;
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => { updateStatus(id, 'thinking'); updateWaiter(id, 'thinking', ''); }}>thinking</Button>
            <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`} onClick={() => { (updateTableNr(id)); }} >new order</Button>
          </>
        );
      case 'thinking':
        return (

          <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`} onClick={() => { (updateTableNr(id)); }}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => { updateStatus(id, 'waiting'); updateWaiter(id, 'waiting'); }}>preapering</Button>
        );
      case 'waiting':
        return (
          <Button onClick={() => { updateStatus(id, 'ready'); updateWaiter(id, 'ready'); }}>delivered</Button>
        );
      case 'ready':
        return (
          <Button onClick={() => { updateStatus(id, 'paid'); updateWaiter(id, 'paid'); }}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => { updateStatus(id, 'free'); updateWaiter(id, 'free'); this.resetWaiterInfo(); }}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell className={row.status === 'ready' ? styles.ready : null}  >
                    {row.status === 'free' ? null : (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.id, row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* {row.order ? <h1>Table {this.informWaiter} meals are ready</h1> : null} */}
        </Paper>
      );
    }
  }
}

export default Waiter;