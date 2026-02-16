const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUser } = require('../middleware/validator');

router.post('/register', validateUser, userController.registerUser);
router.get('/all', userController.getAllUsers);
module.exports = router;