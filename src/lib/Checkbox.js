/* eslint-disable react/button-has-type */
import * as React from 'react';
import PropTypes from 'prop-types';

function CheckBox({ value, name, label, labelClassName, onChange, onBlur, ...props }) {
  return (
    <div className="inline-flex items-center py-2">
      <input
        id={name}
        name={name}
        className={`rounded w-5 h-5 ${
          value && 'text-pink-600'
        } shadow-md border-2 focus:outline-none form-radio focus:ring-2 focus:ring-pink-600`}
        type="checkbox"
        onChange={() => onChange(!value)}
        onBlur={() => onBlur(value)}
        checked={value}
        {...props}
      />
      <label className={labelClassName} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default CheckBox;

CheckBox.defaultProps = {
  name: 'hello-universe',
  label: 'Hello Universe',
  value: 'hello-universe',
  labelClassName: 'px-4 text-base',
  onChange: () => {},
  onBlur: () => {},
};

CheckBox.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
