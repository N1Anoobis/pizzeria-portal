import React from 'react';
import styles from './WaiterOrderNew.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

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
    placeOrder: PropTypes.func,
    newOrder: PropTypes.any,
    
  }
  componentDidMount() {
    const { fetchMenu } = this.props;
    fetchMenu();
  }

  state = {
    valueMeal: '',
    valueNumber: '',
  }

  resetForm() {
    this.setState(prevState => ({
      valueNumber: '',
    }));
    this.setState(prevState => ({
      valueMeal: '',
    }));
  }

  render() {
    const { product } = this.props;
    const { tableNr } = this.props;
    const { fetchcurrentOrder } = this.props;
    const { currentOrder } = this.props;
    const { fetchcurrentOrderNr } = this.props;
    const { currentOrderNr } = this.props;
    const { placeOrder } = this.props;

    const menuData = Array.from(product);

    const handleChangeTable = (event) => {
      this.setState(prevState => ({
        valueNumber: event.target.value,
      }));
      fetchcurrentOrderNr(event.target.value);
    };

    const handleChangeOrder = (event) => {
      this.setState(prevState => ({
        valueMeal: event.target.value,
      }));
      fetchcurrentOrder(event.target.value);

    };
    return (
      <>
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table nr: {typeof tableNr === 'string' ? tableNr : null}</TableCell>
                <TableCell></TableCell>
                <TableCell>Number of Meals</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell>
                  <FormControl >
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="select-table"
                      value={this.state.valueMeal}
                      onChange={handleChangeOrder}
                    >{menuData.map(row => (
                        <MenuItem key={row.name} value={row.name}>{row.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                </TableCell>
                <TableCell>
                  <FormControl >
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={this.state.valueNumber}
                      onChange={handleChangeTable}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                    </Select>
                  </FormControl>
                  <span>    </span>
                </TableCell>
                <TableCell
                >
                  {this.state.valueNumber ? menuData.map(item => item.name === currentOrder
                    ? (isNaN(item.price * currentOrderNr) ? null : item.price * currentOrderNr)
                    : null) : ''}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button  onClick={e => { placeOrder(parseInt(tableNr), currentOrder, currentOrderNr); this.resetForm(); }} >Place Order</Button>
        </Paper>
      </>
    );
  }
}
export default WaiterOrderNew;