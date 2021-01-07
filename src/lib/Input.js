import * as React from 'react';
// import PropTypes from 'prop-types';
import { Input as MdInput } from '@material-ui/core';

function Input({ ...props }) {
  return (
    <MdInput variant="contained" color="primary" {...props}>
      Hello World
    </MdInput>
  );
}

export default Input;

Input.defaultProps = {};

Input.prototype = {};
