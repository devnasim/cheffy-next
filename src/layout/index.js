import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto">{children}</div>
    </>
  );
};

export default Layout;
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
