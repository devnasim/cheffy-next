/* eslint-disable react/button-has-type */
import * as React from 'react';
import PropTypes from 'prop-types';

function Radio({ id, value, name, label, labelClassName, ...props }) {
  const checked = value === id;
  return (
    <div className="inline-flex items-center py-2">
      <input
        id={value}
        name={name}
        value={id}
        className={`rounded-full w-5 h-5 ${
          checked && 'text-pink-600'
        } shadow-md border-2 focus:outline-none form-radio focus:ring-2 focus:ring-pink-600`}
        type="radio"
        checked={checked}
        {...props}
      />
      <label className={labelClassName} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default Radio;

Radio.defaultProps = {
  name: 'Hello Universe',
  secondary: false,
  id: 'hello-universe',
  value: 'hello-universe',
  labelClassName: 'px-4 text-base',
  label: 'Hello Universe',
};

Radio.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  secondary: PropTypes.bool,
  labelClassName: PropTypes.string,
  label: PropTypes.string,
};
