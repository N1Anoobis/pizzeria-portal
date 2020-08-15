import React from 'react';
import style from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = () => {
  return (
    <div className={style.component}>
      <h2>
        Waiter view    
      </h2>
      <Link to='Waiter/order/new'>WaiterOrderNew</Link>
      <Link to='/Waiter/order/:id'>WaiterOrderId</Link>
    </div>
  );
};

export default Waiter;
