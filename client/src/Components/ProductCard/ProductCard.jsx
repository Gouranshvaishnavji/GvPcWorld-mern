import React from 'react';
import { Card, CardContent, CardMedia, Button } from '@mui/material';

const ProductCard = ({ image, onSpecificationClick }) => {
    return (
        <Card sx={{ width: '20vw', height: '29vh', m: 1 }}>
            <CardMedia
                component="img"
                height="199"
                image={image}
                alt="PC Image"
            />
            <CardContent>
                <Button variant="outlined" onClick={onSpecificationClick}>Specifications</Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
