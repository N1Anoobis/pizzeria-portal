import React from 'react';
import style from './tablesEventsID.module.scss';
import PropTypes from 'prop-types';

const tablesEventsID = (props) => {
  return (
    <div className={style.component}>
      <h2>
      tablesEventsID view
      </h2>
      <p>{document.URL.indexOf('/:id') !== -1 ? props.match.params.id : null}</p>
    </div>
  );
};

tablesEventsID.propTypes = {
  match: PropTypes.string,
};

export default tablesEventsID;
