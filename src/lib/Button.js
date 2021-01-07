import * as React from 'react';
// import PropTypes from 'prop-types';
import { Button as MdButton } from '@material-ui/core';

function Button({ ...props }) {
  return (
    <MdButton variant="contained" color="primary" {...props}>
      Hello World
    </MdButton>
  );
}

export default Button;

Button.defaultProps = {};

Button.prototype = {};
