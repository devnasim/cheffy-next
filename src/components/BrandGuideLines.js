import * as React from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import { Button, Input } from '../lib';

function Home() {
  return (
    <Container maxWidth="lg">
      <Typography component="div">
        <Box fontWeight="fontWeightBold" component="h1">
          Brand Guidelines and Reusable Components{' '}
        </Box>
        <Box fontWeight="fontWeightMedium" component="h2">
          Buttons
        </Box>
      </Typography>
      <Button />
      <Typography component="div">
        <Box fontWeight="fontWeightMedium" component="h2">
          Inputs
        </Box>
      </Typography>
      <Input placeholder="Saad Lam..." />
    </Container>
  );
}

export default Home;
