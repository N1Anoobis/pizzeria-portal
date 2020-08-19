import React from 'react';
import styles from './Tables.module.scss';
import { Link, NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const demoContent = {
  date: '2020-08-17T12:00',
};

const schedul = [
  { time: '12:00', table1: 'reservation', id1: 'smith 2 people', table2: '', id2: '', table3: '', id3: '' },
  { time: '12:30', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '' },
  { time: '13:00', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '' },
  { time: '13:30', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '' },
  { time: '14:00', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '' },
  { time: '14:30', table1: 'event', id1: 'wedding 40 people', table2: '', id2: '', table3: 'reservation', id3: 'colins 3 people' },
  { time: '15:00', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '' },
  { time: '15:30', table1: '', id1: '', table2: 'event', id2: 'graduaded party 15 people', table3: '', id3: '' },
  { time: '16:00', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '' },
  { time: '16:30', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '' },
  { time: '17:00', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '' },
  { time: '17:30', table1: '', id1: '', table2: 'reservation', id2: 'jones 4 people', table3: '', id3: '' },
  { time: '18:00', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '' },
  { time: '18:30', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '' },
  { time: '19:00', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '' },
  { time: '19:30', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '' },
  { time: '20:00', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '' },
  { time: '20:30', table1: 'reservation', id1: 'nowak 5 people', table2: '', id2: '', table3: '', id3: '' },
];

const renderActions = (table, id) => {
  switch (table) {
    case 'reservation':
      return (
        <Button variant="contained" component={Link} to={process.env.PUBLIC_URL + '/tables/booking/' + id}>Reservation</Button>
      );
    case 'event':
      return (
        <Button variant="contained" component={Link} to={process.env.PUBLIC_URL + '/tables/events/' + id}>Event</Button>
      );
    default:
      return null;
  }
};

const Tables = () => {
  return (
    <div className={styles.component}>
      <form className={styles.select} noValidate>
        <TextField
          id="datetime-local"
          label="Reservation date"
          type="datetime-local"
          value={demoContent.date}
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button className={styles.button} component={NavLink} exact to={process.env.PUBLIC_URL + '/tables/booking/new/order'}>New Reservation</Button>
        <Button className={styles.button} component={NavLink} exact to={process.env.PUBLIC_URL + '/tables/events/new/order'}>New Event</Button>
      </form>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedul.map(row => (
            <TableRow key={row.time}>
              <TableCell>
                {row.time}
              </TableCell>
              <TableCell>
                {renderActions(row.table1, row.id1)}
              </TableCell>
              <TableCell>
                {renderActions(row.table2, row.id2)}
              </TableCell>
              <TableCell>
                {renderActions(row.table3, row.id3)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tables;

