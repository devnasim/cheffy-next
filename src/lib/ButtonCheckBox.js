/* eslint-disable react/button-has-type */
import * as React from 'react';
import PropTypes from 'prop-types';

function ButtonCheckBox({ icon, checked, name, onChange, ...props }) {
  return (
    <button
      className={`${
        checked
          ? 'bg-pink-600 text-white hover:bg-pink-700'
          : 'bg-gray-50 text-gray-700 hover:bg-gray-200'
      } text-base py-1 px-4 rounded-full shadow-sm  focus:outline-none focus:ring-2 focus:ring-pink-600`}
      type="button"
      onClick={() => onChange(!checked)}
      {...props}
    >
      <div className="inline-flex items-center">
        {icon && <span className="pr-2"> {icon}</span>}
        {name}
      </div>
    </button>
  );
}

export default ButtonCheckBox;

ButtonCheckBox.defaultProps = {
  name: 'Hello Universe',
  checked: false,
  onChange: () => {},
  icon: null,
};

ButtonCheckBox.propTypes = {
  icon: PropTypes.any,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
