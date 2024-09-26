import React from 'react';
import { Container, Typography } from '@mui/material';
import TopNav from '../Components/TopNav/TopNav';

const AboutUs = () => {
  return (
    <>
    <TopNav />

    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        This is the About Us page. gvpcworld.
      </Typography>
    </Container>
    </>

  );
  
};

export default AboutUs;
