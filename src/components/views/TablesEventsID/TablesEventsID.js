import React from 'react';
import style from './TablesEventsID.module.scss';
import PropTypes from 'prop-types';

const TablesEventsID = (props) => {
  return (
    <div className={style.component}>
      <h2>
      TablesEventsID view
      </h2>
      <p>{props.match.params.id !== 'new' ? props.match.params.id : ''}</p>
    </div>
  );
};

TablesEventsID.propTypes = {
  match: PropTypes.string,
};

export default TablesEventsID;
