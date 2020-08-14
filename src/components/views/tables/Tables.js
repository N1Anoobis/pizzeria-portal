import React from 'react';
import style from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => {
  return (
    <div className={style.component}>
      <h2>
          Tables view
      </h2>
      <Link to='/tables/booking/:id'>tablesBookingID</Link><span> | </span>
      <Link to='/tables/booking/new'>tablesBookingNew</Link><span> | </span>
      <Link to='/tables/events/:id'>tablesEventsID</Link><span> | </span>
      <Link to='/tables/events/new'>tablesEventsNew</Link>
    </div>
  );
};

export default Tables;
