import React from 'react';
import style from './tablesBookingID.module.scss';
import PropTypes from 'prop-types';

const tablesBookingID = (props)=> {
  return (
    <div className={style.component}>
      <h2>
      tablesBookingID view
      </h2>
      <p>{document.URL.indexOf('/:id') !== -1 ? props.match.params.id : null}</p>
    </div>
  );
};

tablesBookingID.propTypes = {
  match: PropTypes.string,
};

export default tablesBookingID;
