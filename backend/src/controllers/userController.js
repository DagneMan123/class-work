const User = require('../models/userModel');

// POST: Register User
exports.registerUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json({
            status: "Success",
            message: "User registered successfully",
            data: savedUser
        });
    } catch (error) {
        res.status(400).json({ 
            status: "Error", 
            message: error.message 
        });
    }
};

// GET: Get All Users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: "Success",
            count: users.length,
            data: users
        });
    } catch (error) {
        res.status(500).json({ 
            status: "Error", 
            message: error.message 
        });
    }
};