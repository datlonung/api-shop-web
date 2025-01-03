const express = require('express');
const {registerUser, getUsers, getUserById, createUser, updateUser, deleteUser  } = require('../controllers/userController');
const router = express.Router();
// get routes
router.get('/', getUsers);
router.get('/:id', getUserById);

// post routes
router.post('/', createUser);
// put routes
router.put('/:id', updateUser);
// delete routes
router.delete('/:id', deleteUser);

//  register user
router.post('/register', registerUser);

module.exports = router;