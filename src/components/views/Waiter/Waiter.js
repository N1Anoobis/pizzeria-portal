import React from 'react';
import style from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = () => {
  return (
    <div className={style.component}>
      <h2>
        Waiter view    
      </h2>
      <Link to='/waiter/order/new'>waiterOrderNew</Link><span> | </span>
      <Link to='/waiter/order/:id'>waiterOrderId</Link>
    </div>
  );
};

export default Waiter;
