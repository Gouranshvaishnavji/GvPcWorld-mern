const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller'); 
const upload = require('../middleware/Files.middleware');
// const { User } = require('../controllers/user.controller');
const { authMiddleware } = require('../middleware/TokenVerify.middleware');




router.get('/', productController.getAllProducts);

router.get('/:productId',authMiddleware, productController.getProductById);


router.post('/insert',authMiddleware, upload.array('images', 10), productController.createProduct);


router.put('/update/:productId',authMiddleware, upload.array('images', 10), productController.updateProduct);


router.delete('/:productId/images',authMiddleware, productController.deleteProductImage);

router.delete('/:productId',authMiddleware, productController.deleteProduct);

module.exports = router;
