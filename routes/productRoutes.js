const router = require('express').Router();
const product = require('../models/product');

router.get('/Products', async (req, res) => {
    try {
        const products = await product.find();
        console.log(products)
        res.json(products);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router