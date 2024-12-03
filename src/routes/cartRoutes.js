const express = require('express');
const { getCarts, getCartById, createCart, updateCart, deleteCart } = require('../controllers/cartController');
const router = express.Router();
// get routes
router.get('/', getCarts);
router.get('/:id', getCartById);
// post routes
router.post('/', createCart);
// put routes
router.put('/', updateCart);
// delete routes
router.delete('/', deleteCart);


module.exports = router;