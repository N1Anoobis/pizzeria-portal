import React from 'react';
import style from './waiterOrderID.module.scss';
import PropTypes from 'prop-types';

function waiterOrderID(props) {
  return (
    <div className={style.component}>
      <h2>
      waiterOrderID view
      </h2>
      <p>{document.URL.indexOf('/:id') !== -1 ? props.match.params.id : null}</p>
    </div>
  );
}

waiterOrderID.propTypes = {
  match: PropTypes.string,
};

export default waiterOrderID;
