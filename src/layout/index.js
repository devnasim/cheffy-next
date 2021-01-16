import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const Layout = ({ children, hasBanner }) => {
  return (
    <>
      <Header />
      <div className={`${hasBanner ? '' : 'container'} mx-auto`}>{children}</div>
    </>
  );
};

export default Layout;

Layout.defaultProps = {
  hasBanner: false,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasBanner: PropTypes.bool,
};
