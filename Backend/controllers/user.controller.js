const userModel = require('../models/User.model');
const userServices = require('../services/user.service');
const { validationResult } = require('express-validator');


// Register a new user
exports.registerUser = async (req, res, next) => {
  
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { firstName, lastName, email, password } = req.body;

        
        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }
        
        //hash password
        const hashedPassword = await userModel.hashPassword(password);

        // Create new user
        const user = await userServices.createUser({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        if(!user) {
            return res.status(400).json({ message: 'User registration failed' });
        }

        await user.save();

        // Generate token
        const token = await user.generateAuthToken();

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            },
            token
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }

};
