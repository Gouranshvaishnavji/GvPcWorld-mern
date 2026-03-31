import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';

const ProductList = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8, minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Product Catalog Coming Soon
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We're connecting to our backend. Please check back shortly!
        </Typography>
      </Box>
    </Container>
  );
};

export default ProductList;