import React from 'react';
import PageNav from '../PageNav';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) =>
  (
    <div>
      <PageNav />
      {children}
    </div>
  );


MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
