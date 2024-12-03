require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./src/models/user');

console.log('MONGO_URI:', process.env.MONGO_URI); // Add this line to check the value

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("MongoDB connected");

        const users = [
            { username: 'tan', password: 'tan123', role: 'user' },
            { username: 'admin', password: 'admin123', role: 'admin' },
        ];

        for (const user of users) {
            const existingUser = await User.findOne({ username: user.username });
            if (!existingUser) {
                await User.create(user);
                console.log(`User '${user.username}' created.`);
            } else {
                console.log(`User '${user.username}' already exists.`);
            }
        }

        mongoose.disconnect();
        console.log("MongoDB disconnected");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });