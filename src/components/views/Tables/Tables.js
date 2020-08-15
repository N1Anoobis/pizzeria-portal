import React from 'react';
import style from './Tables.module.scss';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import TablesBookingNew from '../TablesBookingNew/TablesBookingNew';
import TablesBookingID from '../TablesBookingID/TablesBookingID';
import TablesEventsID from '../TablesEventsID/TablesEventsID';
import TablesEventsNew from '../TablesEventsNew/TablesEventsNew';

const Tables = () => {
  return (
    <BrowserRouter>
      <div className={style.component}>
        <h2>
          Tables view
        </h2>
        <Link to='/tables/booking/new'>TablesBookingNew</Link>
        <Link to='/tables/booking/:id'>TablesBookingID</Link>
        <Link to='/tables/events/:id'>TablesEventsID</Link>
        <Link to='/tables/events/new'>TablesEventsNew</Link>
      </div>
      <Switch>
        <Route path='/tables/booking/new' exact component={TablesBookingNew} />
        <Route path='/tables/booking/:id' exact component={TablesBookingID} />
        <Route path='/tables/events/new' exact component={TablesEventsNew} />
        <Route path='/tables/events/:id' exact component={TablesEventsID} />
      </Switch>
    </BrowserRouter>
  );
};

export default Tables;
