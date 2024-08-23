import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box component="footer" sx={{ textAlign: 'center', py: 2, mt: 4, backgroundColor: '#f5f5f5' }}>
            <Typography variant="body1">Made by Gouransh</Typography>
            <Grid container spacing={2} justifyContent="center" mt={2}>
                <Grid item>
                    <Button variant="contained" color="primary" component={Link} to="/product">View Products</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary" component={Link} to="/add">Add Product</Button>
                </Grid>
                {/* Add more buttons here if needed */}
            </Grid>
        </Box>
    );
};

export default Footer;
