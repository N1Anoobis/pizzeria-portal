import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import {NavLink} from 'react-router-dom';

const demoContent = [
  {id: '1', order: 453, meals: 'pizza', amount: 2, tableNumber: 23},
  {id: '2', order: 472, meals: 'soup', amount: 4, tableNumber: 73},
  {id: '3', order: 123, meals: 'kebab', amount: 1, tableNumber: 14},
  {id: '4', order: 234, meals: 'beer', amount: 2, tableNumber: 1},
  {id: '5', order: 345, meals: 'gulash', amount: 3, tableNumber: 77},
  {id: '6', order: 456, meals: 'steak', amount: 2, tableNumber: 8},
];

const Kitchen = () => (
  <Paper >
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Queue</TableCell>
          <TableCell>Table number</TableCell>
          <TableCell>Order number</TableCell>
          <TableCell>Meals</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Complited</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
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
);

export default Kitchen;

