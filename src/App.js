import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/WaiterContainer';
import Kitchen from './components/views/Kitchen/Kitchen';
import WaiterOrderID from './components/views/WaiterOrderID/WaiterOrderID';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import TablesBookingID from './components/views/TablesBookingID/TablesBookingID';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import TablesEventsID from './components/views/TablesEventsID/TablesEventsID';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import  store  from './redux/store.js';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/panel'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout >
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBookingID} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new/order'} component={TablesBookingNew} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEventsID} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/new/order'} component={TablesEventsNew} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterOrderNew} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrderID} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
