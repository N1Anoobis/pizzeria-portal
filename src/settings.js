export const api = {
  url: '//' + window.location.hostname + (window.location.hostname === 'localhost' ? ':3131/api' : ''),
  tables: 'tables',
  product: 'product',
  order: 'order',
  new: 'new',
  newOrd: 'newOrd',
  booking: 'booking',
  event: 'event',
  waiter: 'waiter',
  dateStartParamKey: 'date_gte',
  dateEndParamKey: 'date_lte',
  notRepeatParam: 'repeat=false',
  repeatParam: 'repeat_ne=false',
};

