import React from 'react';
import style from './TablesBookingID.module.scss';
import PropTypes from 'prop-types';

const TablesBookingID = (props)=> {
  return (
    <div className={style.component}>
      <h2>
      TablesBookingID view
      </h2>
      <p>{props.match.params.id !== 'new' ? props.match.params.id : null}</p>
    </div>
  );
};

TablesBookingID.propTypes = {
  match: PropTypes.string,
};

export default TablesBookingID;
