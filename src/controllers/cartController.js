const Cart = require("../models/cart"); // Add this line to import the Cart model

// get cart
exports.getCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get cart by id
exports.getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create cart
exports.createCart = async (req, res) => {
  const cart = new Cart(req.body);
  try {
    const newCart = await cart.save();
    res.status(201).json(newCart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// update cart
exports.updateCart = async (req, res) => {
  try {
    await Cart.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Cart updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete cart
exports.deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
