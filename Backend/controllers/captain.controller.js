const captainModel = require('../models/Captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/BlackListedTokenModel');

exports.registerCaptain = async (req, res, next) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if captain already exists
    const existingCaptain = await captainModel.findOne({ email: req.body.email });
    if (existingCaptain) {
      return res.status(400).json({ message: 'Captain already exists with this email' });
    }

    // Hash password
    const hashedPassword = await captainModel.hashPassword(req.body.password);
    
    const captainData = {
        ...req.body,
        password: hashedPassword,
    }

    const captain = await captainService.createCaptain(captainData);
    
    // Generate token
    const token = await captain.generateAuthToken();
    
    res.status(201).json({
      message: 'Captain registered successfully',
      captain: {
        id: captain._id,
        firstName: captain.firstName,
        lastName: captain.lastName,
        email: captain.email,
        vehicle: captain.vehicle
      },
      token
    });
  } catch (error) {
    if (error.message.includes('required')) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.loginCaptain = async (req, res, next) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Find captain by email
    const captain = await captainModel.findOne({ email: req.body.email }).select('+password');
    if (!captain) {
      return res.status(401).json({ message: 'User not registered' });
    }

    // Compare password
    const isMatch = await captain.comparePassword(req.body.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate token
    const token = await captain.generateAuthToken();

    // Set cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600000 // 1 hour
        });

    res.status(200).json({
      message: 'Captain logged in successfully',
      captain: {
        id: captain._id,
        firstName: captain.firstName,
        lastName: captain.lastName,
        email: captain.email,
        vehicle: captain.vehicle
      },
      token
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}


module.exports.getProfile = async (req, res, next) => {
  try {
    const captain = req.user;

    if(!captain) {
      return res.status(404).json({ message: 'Captain not found' });
    }

    res.status(200).json({
      message: 'Captain profile fetched successfully',
      captain: {
        id: captain._id,
        firstName: captain.firstName,
        lastName: captain.lastName,
        email: captain.email,
        vehicle: captain.vehicle
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}


module.exports.logoutCaptain = async (req, res, next) => {
  try {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    console.log("Token is", token)
    if(!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const captain = req.user;
    if(!captain) {
      return res.status(404).json({ message: 'Captain not found' });
    }

    // Blacklist the token
    await blackListTokenModel.create({ token });
    
    res.clearCookie('token');

    res.status(200).json({
      message: 'Captain logged out successfully'
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}