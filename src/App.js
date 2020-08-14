import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import waiterOrderID from './components/views/waiterOrderID/waiterOrderID';
import waiterOrderNew from './components/views/waiterOrderNew/waiterOrderNew';
import tablesBookingID from './components/views/tablesBookingID/tablesBookingID';
import tablesBookingNew from './components/views/tablesBookingNew/tablesBookingNew';
import tablesEventsNew from './components/views/tablesEventsNew/tablesEventsNew';
import tablesEventsID from './components/views/tablesEventsID/tablesEventsID';

const App = () => {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout >
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={tablesBookingID} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={tablesBookingNew} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={tablesEventsID} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={tablesEventsNew} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={waiterOrderNew} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={waiterOrderID} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
