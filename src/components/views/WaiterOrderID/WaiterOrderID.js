import React from 'react';
import style from './WaiterOrderID.module.scss';
import PropTypes from 'prop-types';

const WaiterOrderID = (props) => {
  return (
    <div className={style.component}>
      <h2>
      WaiterOrderID view
      </h2>
      <p>{props.match.params.id ? props.match.params.id : ''}</p>
    </div>
  );
};

WaiterOrderID.propTypes = {
  match: PropTypes.string,
};

export default WaiterOrderID;
