const userModel = require('../models/User.model');
const userServices = require('../services/user.service');
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blacklistToken.model');


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


exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }


    try {
        const user = await userModel.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ message: 'User not registered' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate token
        const token = await user.generateAuthToken();
        console.log('Generated token:', token); // Debug log

        // Set cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600000 // 1 hour
        });

        // Return response with token
        return res.status(200).json({
            message: 'User logged in successfully',
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            },
            token: token // Explicitly name the property
        });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
}


exports.getUserProfile = async (req, res, next) => {
    try {
        // req.user is set by the auth middleware
        const user = req.user;
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.status(200).json({
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}


exports.logoutUser = async (req, res, next) => {
    try {
        // Get token from request
        const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return res.status(400).json({ message: 'No token provided' });
        }

        // Add token to blacklist
        await blackListTokenModel.create({ token });
        
        // Clear the token cookie
        res.clearCookie('token');
        
        res.status(200).json({ message: 'User logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

