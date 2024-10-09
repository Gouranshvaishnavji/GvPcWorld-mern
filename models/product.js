const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String },
    category: { type: String },
    price: { type: Number }    
   
});
const product = mongoose.model('Products', productSchema, "Products");
module.exports = product

