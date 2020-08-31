import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({ tables }) => tables.data;
export const getLoadingState = ({ tables }) => tables.loading;
export const getMenu = ({ tables }) => tables.product;
export const currentTableNr = ({ tables }) => tables.currentTableNr;
export const currentOrder = ({ tables }) => tables.order;
export const currentOrderNr = ({ tables }) => tables.nr;
export const placeNewOrder = ({ tables }) => tables.newOrder;
export const getKitchen = ({ tables }) => tables.kitchen;
export const getChecked = ({ tables }) => tables.checked;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const UPDATE_STATUS = createActionName('UPDATE_STATUS');

const GET_MENU = createActionName('GET_MENU');

const GET_TABLENR = createActionName('GET_TABLENR');

const GET_ORDER = createActionName('GET_ORDER');

const GET_ORDERNR = createActionName('GET_ORDERNR');

const PLACE_ORDER = createActionName('PLACE_ORDER');

const GET_KITCHEN = createActionName('GET_KITCHEN');

const GET_CHECKED = createActionName('GET_CHECKED');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const updateStatus = (id, status) => ({ id, status, type: UPDATE_STATUS });

export const fetchMenu = payload => ({ payload, type: GET_MENU });

export const currentTableNum = payload => ({ payload, type: GET_TABLENR });

export const currenttOrder = payload => ({ payload, type: GET_ORDER });

export const currenttOrderNr = payload => ({ payload, type: GET_ORDERNR });

export const placeNeewOrder = (tableNr, currentOrder, currentOrderNr) => ({ tableNr, currentOrder, currentOrderNr, type: PLACE_ORDER });

export const fetchKitchen = payload => ({ payload, type: GET_KITCHEN });

export const fetchChecked = payload => ({ payload, type: GET_CHECKED });

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.tables}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const fetchMenuAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.product}`)
      .then(res => {
        dispatch(fetchMenu(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const updateAPI = (id, status) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.tables}`)
      .then(() => {
        dispatch(updateStatus(id, status));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const updateTableNr = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.tables}`)
      .then(res => {
        dispatch(currentTableNum(id));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const currentOrderAPI = (order) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.order}`)
      .then(res => {
        dispatch(currenttOrder(order));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const currentOrderAPINr = (orderNr) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.order}`)
      .then(res => {
        dispatch(currenttOrderNr(orderNr));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};
export const placeOrderApi = (tableNr, currentOrder, currentOrderNr) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.order}`)
      .then(() => {
        dispatch(placeNeewOrder(tableNr, currentOrder, currentOrderNr));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
    //tu zmienilem z newOrd na order
    Axios.post(`${api.url}/${api.order}`, { 'id': '', 'order': Math.floor(Math.random() * (999 - 1 + 1) + 1), 'meals': currentOrder, 'amount': currentOrderNr, 'tableNumber': tableNr })
      .then(function (response) {

        console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      });


  };

};

export const fetchKitchenAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.order}`)
      .then(res => {

        dispatch(fetchKitchen(res.data));

      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });



  };
};


export const updateStateKitchen = (order) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    // console.log(order)

    Axios
      .get(`${api.url}/${api.order}`)
      .then(res => {
        dispatch(fetchKitchen(order));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });


    Axios.delete(`${api.url}/${api.order}`)

      .then(function (response) {
        
        console.log(response);
    
      })
      .catch(function (error) {
        console.log(error);
      });

  };
};

export const updateCheckedState = (bool) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.tables}`)
      .then(() => {
        dispatch(fetchChecked(bool));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

// updateStateKitchen



/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case UPDATE_STATUS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: statePart.data.map(currentOrder => currentOrder.id === action.id ?
          { ...currentOrder, status: action.status } :
          currentOrder
        ),
      };
    }
    case GET_MENU: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        product: action.payload,
      };
    }
    case GET_TABLENR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        currentTableNr: action.payload,
      };
    }

    case GET_ORDER: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        order: action.payload,
      };
    }

    case GET_ORDERNR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        nr: action.payload,
      };
    }

    case PLACE_ORDER: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        newOrder: {
          tableNr: action.tableNr,
          currentOrder: action.currentOrder,
          currentOrderNr: action.currentOrderNr,
        },
      };
    }

    case GET_KITCHEN: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        kitchen: action.payload,
      };
    }

    case GET_CHECKED: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        checked: action.payload,
      };
    }

    default:
      return statePart;
  }
}