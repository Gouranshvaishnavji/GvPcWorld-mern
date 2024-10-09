const express = require('express');
const router = express.Router();
const Product = require('../product');

// Create a product
router.post('/add', async (req, res) => {
    // Validate the request body
    const  name = req.body.name;
    const category = req.body.category;
    const price = req.body.price;

    console.log(req.body)

    try {
        // Create a new product instance
        const newProduct = new Product({
            name,
            category,
            price
        });

        // Save the product to the database
        const savedProduct = await newProduct.save();

        // Respond with the created product
        res.status(201).json(savedProduct);
    } catch (err) {
        // Handle validation errors
        if (err.name === 'ValidationError') {
            return res.status(400).json({ errors: err.errors });
        }

        // Handle other errors
        console.error(err); // Log the error for debugging
        res.status(500).json({ message: 'Internal server error' });
    }
});



// Read all products
router.get('/Products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

// Read a single product by ID
router.get('/:id', async (req, res) => {
    try {
        // Find the product by ID
        const product = await Product.findById(req.params.id);

        // Check if product was found
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Respond with the found product
        res.json(product);
    } catch (err) {
        // Handle errors
        console.error('Error occurred:', err); // Log error for debugging
        res.status(500).json({ message: 'Internal server error' });
    }
});


// Update a product by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
});

// Delete a product by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

module.exports = router;
