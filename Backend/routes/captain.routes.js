// Basic Express routes configuration
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');

router.post('/register', [
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').notEmpty().withMessage('Color is required'),
    body('vehicle.numberPlate').notEmpty().withMessage('Number plate is required'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
    body('vehicle.vehicleType').notEmpty().withMessage('Vehicle type is required'),

], captainController.registerCaptain);




module.exports = router;