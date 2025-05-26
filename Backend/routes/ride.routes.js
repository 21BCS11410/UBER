const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().withMessage('invalid Pickup address'),
    body('destination').isString().withMessage('invalid destination address'),
    body('vehicleType').isString().isIn(['bike', 'auto', 'car']).withMessage('invalid vehicle type'),
    rideController.createRide
)



module.exports = router;