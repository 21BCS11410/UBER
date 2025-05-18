// Basic Express routes configuration
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

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


router.post('/login', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').notEmpty().withMessage('Password is required'),
], captainController.loginCaptain);


router.get('/profile', authMiddleware.authCaptain, captainController.getProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);



module.exports = router;