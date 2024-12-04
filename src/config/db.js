require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit the server with a failure code
    });

mongoose.connection.on('error', (err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1); // Exit the server with a failure code
});

module.exports = mongoose;