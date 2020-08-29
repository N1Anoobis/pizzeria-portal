import React from 'react';
import styles from './WaiterOrderNew.module.scss';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class WaiterOrderNew extends React.Component {
  static propTypes = {
    fetchMenu: PropTypes.func,
    product: PropTypes.any,
    tableId: PropTypes.any,
    tableNr: PropTypes.any,
    currentOrder: PropTypes.any,
    currentOrderNr: PropTypes.any,
    fetchcurrentOrder: PropTypes.any,
    fetchcurrentOrderNr: PropTypes.any,
  }
  componentDidMount() {
    const { fetchMenu } = this.props;
    fetchMenu();
  }

  render() {
    const { product } = this.props;
    const { tableNr } = this.props;
    const { fetchcurrentOrder } = this.props;
    const { currentOrder } = this.props;
    const { fetchcurrentOrderNr } = this.props;
    const { currentOrderNr } = this.props;
    const menuData = Array.from(product);
    console.log( currentOrderNr);

    return (
      <>
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table nr: {typeof tableNr === 'string' ? tableNr : null}</TableCell>
                <TableCell>Meal chosen</TableCell>
                <TableCell>Number of Meals</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <Select
                  id="select-table"
                  value=""  >
                  {menuData.map(row => (
                    <MenuItem key={row.id} onClick={() => fetchcurrentOrder(row.name)}>
                      {row.name}
                    </MenuItem>
                  ))}
                </Select>
                <TableCell>
                  {typeof currentOrder === 'string' ? currentOrder : null}
                </TableCell>
                <TableCell>
                  <Select>
                    <MenuItem onClick={() => fetchcurrentOrderNr('1')}>1</MenuItem>
                    <MenuItem onClick={() => fetchcurrentOrderNr('2')}>2</MenuItem>
                    <MenuItem onClick={() => fetchcurrentOrderNr('3')}>3</MenuItem>
                    <MenuItem onClick={() => fetchcurrentOrderNr('4')}>4</MenuItem>
                  </Select>
                  <span>    </span>
                  {typeof currentOrderNr === 'string' ? currentOrderNr : null}
                </TableCell>
                <TableCell>
                  {menuData.map(item => item.name === currentOrder 
                    ? item.price * currentOrderNr 
                    : null)}
                </TableCell>  
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </>
    );
  }
}
export default WaiterOrderNew;