const express = require('express');
const router = express.Router();

const productController = require('../controllers/products');

//get all products
router.get('/products', productController.list);

//get one product with id
router.get('/products/:id', productController.show);

//post product
router.post('/products', productController.create);


module.exports = router;