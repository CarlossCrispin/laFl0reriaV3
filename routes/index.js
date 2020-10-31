const express = require('express');
const router = express.Router();

const product = require('../controllers/products.controller');
const cart = require('../controllers/cart.controllers');

router.get('/', product.getProducts);
router.post('/', product.createProduct);
router.get('/:id', product.getProduct);
router.put('/:id', product.editProduct);
router.delete('/:id', product.deleteProduct);

//cart
router.get('/dos', cart.getCart);
/* router.post('/carrito', product.createProduct);
router.get('/:id', product.getProduct);
router.put('/:id', product.editProduct);
router.delete('/:id', product.deleteProduct); */



module.exports = router;