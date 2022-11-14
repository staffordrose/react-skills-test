import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AccountMenu } from '../layout';

export default function Home() {
  return (
    <Container maxWidth='sm'>
      <AccountMenu />
      <Box sx={{ my: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom>
          React Skills Test
        </Typography>
      </Box>
    </Container>
  );
}
