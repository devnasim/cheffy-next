/* eslint-disable react/button-has-type */
import * as React from 'react';
import PropTypes from 'prop-types';

function Button({ type, name, ...props }) {
  return (
    <button
      className="bg-green-500 py-2 w-full px-4 text-white font-semibold rounded-lg shadow-md"
      type={type}
      {...props}
    >
      {name}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  name: 'Hello Universe',
  type: 'button',
};

Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};
