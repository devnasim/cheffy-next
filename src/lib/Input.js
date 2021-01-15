import * as React from 'react';
import PropTypes from 'prop-types';

function Input({ secondary, ...props }) {
  if (secondary) {
    return (
      <input
        className="w-full p-2 border-grey border-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
        {...props}
      />
    );
  }
  return (
    <input
      className="w-full p-2 border-grey border-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
      {...props}
    />
  );
}

export default Input;

Input.defaultProps = {
  secondary: false,
};

Input.propTypes = {
  secondary: PropTypes.bool,
};
