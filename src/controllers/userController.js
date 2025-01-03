const User = require('../models/user');
const { userValidation } = require('../validation/apiValidation');

// check if the user login already
exports.registerUser = async (req, res) => {
    // Validate the request body
    const { error } = userValidation(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { username, password, role } = req.body;
    const user = new User({ username, password, role });
    try {
        const newUser = await user.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// get users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get user by id
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// create user
exports.createUser = async (req, res) => {
    // Validate the request body
    const { error } = userValidation(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const user = new User(req.body);
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// update user
exports.updateUser = async (req, res) => {
    // Validate the request body
    const { error } = userValidation(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// delete user
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};