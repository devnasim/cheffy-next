import * as React from 'react';
import PropTypes from 'prop-types';
import { Button as MdButton } from '@material-ui/core';

function Button({ name, ...props }) {
  return (
    <MdButton variant="contained" color="primary" {...props}>
      {name}
    </MdButton>
  );
}

export default Button;

Button.defaultProps = {
  name: 'Hello Universe',
};

Button.prototype = {
  name: PropTypes.string,
};
