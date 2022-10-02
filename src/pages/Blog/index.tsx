import React from 'react';
import { CssBaseline, Grid, Container } from '@mui/material';

import Main from './Main';
import Sidebar from '../SliderBar'
import Recommend from '../Recommend';

export default function Blog() {
  return (
    <>
      <CssBaseline />

      <Container maxWidth="lg">
        <main>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main />
            <Sidebar />
          </Grid>

          <Grid container spacing={4}>
            <Recommend></Recommend>
          </Grid>
        </main>
      </Container>
    </>
  );
}
