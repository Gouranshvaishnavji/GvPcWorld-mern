import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, CardContent, Typography, Grid, Button, TextField } from '@mui/material';
import TopNav from '../TopNav/TopNav';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editProductId, setEditProductId] = useState(null);
    const [editProductData, setEditProductData] = useState({ name: '', category: '', price: '' });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/Products');
                setProducts(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleEditClick = (product) => {
        setEditProductId(product._id);
        setEditProductData({ name: product.name, category: product.category, price: product.price });
    };

    const handleCancelClick = () => {
        setEditProductId(null);
        setEditProductData({ name: '', category: '', price: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditProductData({ ...editProductData, [name]: value });
    };

    const handleSaveClick = async () => {
        try {
            await axios.put(`http://localhost:5000/${editProductId}`, editProductData);
            setProducts(products.map(product => 
                product._id === editProductId ? { ...product, ...editProductData } : product
            ));
            setEditProductId(null);
        } catch (err) {
            setError('Error updating product');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/${id}`);
            setProducts(products.filter(product => product._id !== id));
        } catch (err) {
            setError('Error deleting product');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Container>
            <TopNav />

            <Grid container spacing={3}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product._id}>
                        <Card>
                            <CardContent>
                                {editProductId === product._id ? (
                                    <>
                                        <TextField
                                            label="Name"
                                            name="name"
                                            value={editProductData.name}
                                            onChange={handleInputChange}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            label="Category"
                                            name="category"
                                            value={editProductData.category}
                                            onChange={handleInputChange}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            label="Price"
                                            name="price"
                                            value={editProductData.price}
                                            onChange={handleInputChange}
                                            fullWidth
                                            margin="normal"
                                            type="number"
                                        />
                                        <Button 
                                            variant="contained" 
                                            color="primary" 
                                            onClick={handleSaveClick} 
                                            sx={{ mt: 2 }}
                                        >
                                            Save
                                        </Button>
                                        <Button 
                                            variant="contained" 
                                            color="secondary" 
                                            onClick={handleCancelClick} 
                                            sx={{ mt: 2, ml: 2 }}
                                        >
                                            Cancel
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Typography variant="h5">{product.name}</Typography>
                                        <Typography variant="subtitle1">{product.category}</Typography>
                                        <Typography variant="body2">${product.price}</Typography>
                                        <Button 
                                            variant="contained" 
                                            color="primary" 
                                            onClick={() => handleEditClick(product)} 
                                            sx={{ mt: 2 }}
                                        >
                                            Edit
                                        </Button>
                                        <Button 
                                            variant="contained" 
                                            color="secondary" 
                                            onClick={() => handleDelete(product._id)} 
                                            sx={{ mt: 2, ml: 2 }}
                                        >
                                            Delete
                                        </Button>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProductList;
