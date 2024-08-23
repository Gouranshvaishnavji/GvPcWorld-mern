const router = require('express').Router();
const Product = require('../models/product');

router.get('/Products', async (req, res) => {
    try {
        const products = await Product.find();
        console.log(products)
        res.json(products);
    } catch (err) {
        res.json({ message: err });
    }
});
router.post('/add', async (req, res) => {
    // Validate the request body
    const  name = req.body.name;
    const category = req.body.category;
    const price = req.body.price;

    // console.log(req.body)

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

module.exports = router