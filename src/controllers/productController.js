const Product = require('../models/product'); // Add this line to import the Product model
const { productValidation } = require('../validation/apiValidation'); // Add this line to import the productValidation function

// get product
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get product by id
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get product by category
exports.getProductByCategory = async (req, res) => {
    try {
        const product = await Product.find({ category: req.params.category });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// create product
exports.createProduct = async (req, res) => {
    // Validate the request body
    const { error } = productValidation(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const product = new Product(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// update product
exports.updateProduct = async (req, res) => {
    try {
        await Product.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete product by id
exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//delete all product
exports.deleteAllProduct = async (req, res) => {
    try {
        await Product.deleteMany();
        res.status(200).json({ message: 'All Products deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}