import * as React from 'react';

function Input({ ...props }) {
  return <input className="w-full p-2 border-grey border-2 rounded	" {...props} />;
}

export default Input;

Input.defaultProps = {};

Input.propTypes = {};
