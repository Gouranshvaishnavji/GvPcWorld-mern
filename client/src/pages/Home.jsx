import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container } from '@mui/material';
import TopNav from '../Components/TopNav/TopNav';
import ProductCard from '../Components/ProductCard/ProductCard';
import Footer from '../Components/Footer/Footer';

const Home = () => {
    const handleSpecificationClick = () => {
        console.log("Specifications button clicked");
    };

    return (
        <>
            <TopNav />
            <Container>
                <Box display="flex" flexWrap="wrap" justifyContent="space-around" my={4}>
                    {[...Array(10   )].map((_, index) => (
                        <ProductCard
                            key={index}
                            image="https://via.placeholder.com/150"
                            onSpecificationClick={handleSpecificationClick}
                        />
                    ))}
                </Box>

                <Box display="flex" justifyContent="center" my={4}>
                    <Button variant="contained" color="primary" component={Link} to="/custom-pc">
                        Customize PC here
                    </Button>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default Home;
