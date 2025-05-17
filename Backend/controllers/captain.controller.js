const captainModel = require('../models/Captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

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