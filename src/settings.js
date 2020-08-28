export const api = {
  // url: '//' + window.location.hostname + (window.location.hostname === 'localhost' ? ':3131' : ''),
  // url: '//' + window.location.hostname + (window.location.hostname === 'localhost' ? ':3131' : '') + '/api',
  url: '//' + window.location.hostname + (window.location.hostname === 'localhost' ? ':3131/api' : ''),
  // tables: 'tables-settings',
  tables: 'tables',
  products: 'products',
  order: 'order',
  booking: 'booking',
  event: 'event',
  waiter: 'waiter',
  dateStartParamKey: 'date_gte',
  dateEndParamKey: 'date_lte',
  notRepeatParam: 'repeat=false',
  repeatParam: 'repeat_ne=false',
};

