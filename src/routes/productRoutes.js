const express = require('express');
const { getProducts, getProductById, getProductByCategory, createProduct, updateProduct, deleteProduct, deleteAllProduct} = require('../controllers/productController');
const router = express.Router();
// get routes
router.get('/', getProducts);
router.get('/:id', getProductById);
router.get('/:category', getProductByCategory);
// post routes
router.post('/', createProduct);
// put routes
router.put('/', updateProduct);
// delete routes
router.delete('/', deleteProduct);
// delete all routes
router.delete('/deleteAll', deleteAllProduct);



module.exports = router;