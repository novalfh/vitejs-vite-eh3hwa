import { useState } from 'react';
import { Link } from 'react-router-dom';
import './default.css';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export const Default = () => {
  const [count, setCount] = useState(2);

  return (
    <>
      <Container className="default-container" maxWidth="md">
        <Container>
          <h1>{count}</h1>
          <h1>Hello World</h1>
          <h1>{count}</h1>
          <Link style={{ fontSize: '4rem' }}>Link</Link>
        </Container>
      </Container>
      <p>sx</p>

      <Grid container spacing={2} className="gridd">
        <Grid xs={4}>
          <div className="box">Hello World</div>
        </Grid>
        <Grid xs={4}>
          <div className="box">Hello World</div>
        </Grid>
        <Grid xs={4}>
          <div className="box">Hello World</div>
        </Grid>
        <Grid xs={12}>
          <div className="box">Hello World</div>
        </Grid>
      </Grid>
      <h1>Hello</h1>
      {/* <h1>helo</h1> */}
    </>
  );
};
