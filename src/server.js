// src/server.js
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config/db'); // Ensure this is the correct path to your db.js

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
    res.send('API is running');
});

// Routes
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 5000;

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
});
