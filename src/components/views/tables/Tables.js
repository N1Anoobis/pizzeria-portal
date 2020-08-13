import React from 'react';
import style from './Tables.module.scss';
import { Link } from 'react-router-dom';

function Tables() {
  return (
    <div className={style.component}>
      <h2>
          Tables view
      </h2>
      <Link to='/tables/booking/:id'>tablesBookingID</Link>
      <Link to='/tables/booking/new'>tablesBookingNew</Link>
      <Link to='/tables/events/:id'>tablesEventsID</Link>
      <Link to='/tables/events/new'>tablesEventsNew</Link>
    </div>
  );
}

export default Tables;
