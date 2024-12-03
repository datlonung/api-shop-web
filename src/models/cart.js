// models/cart.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
        },
    ],
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
