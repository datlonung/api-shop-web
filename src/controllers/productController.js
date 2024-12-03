const product  = require('../models/product');

// get product
exports.getProducts = async (req, res) => {
    try {
        const products = await product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// get product by id
exports.getProductById = async (req, res) => {
    try {
        const product = await product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// get product by category
exports.getProductByCategory = async (req, res) => {
    try {
        const product = await product.find({ category: req.params.category });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
//  tao product
exports.createProduct = async (req, res) => {
    const products = new Product(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// update product
exports.updateProduct = async (req, res) => {
    try {
        await product.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'Product updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete product
exports.deleteProduct = async (req, res) => {
    try {
        await product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}