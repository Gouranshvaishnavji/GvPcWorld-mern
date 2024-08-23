import React, { useState } from 'react';
import TopNav from '../TopNav/TopNav.jsx';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5000/add', {
                name,
                category,
                price: parseFloat(price)
            });
            setSuccess('Product added successfully!');
            setName('');
            setCategory('');
            setPrice('');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        
        <Container>
            <TopNav />
            <Typography variant="h4">Add Product</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Add Product</Button>
            </form>
            {error && <Typography color="error">{error}</Typography>}
            {success && <Typography color="primary">{success}</Typography>}
        </Container>
    );
};

export default AddProduct;
