/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children }) => {
  return <div className="w-full rounded-sm shadow-md">{children}</div>;
};

export default Card;

Card.defaultProps = {};
Card.propTypes = {
  children: PropTypes.node.isRequired,
};
