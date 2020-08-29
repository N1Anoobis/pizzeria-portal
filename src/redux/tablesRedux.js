import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({ tables }) => tables.data;
export const getLoadingState = ({ tables }) => tables.loading;
export const getMenu = ({ tables }) => tables.product;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const UPDATE_STATUS = createActionName('UPDATE_STATUS');

const GET_MENU = createActionName('GET_MENU');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const updateStatus = (id, status) => ({ id, status, type: UPDATE_STATUS });

export const fetchMenu = payload => ({ payload, type: GET_MENU });

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
          {...currentOrder, status: action.status} :
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
    default:
      return statePart;
  }
}