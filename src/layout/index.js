import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
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
