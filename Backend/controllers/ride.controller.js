const rideService = require('../services/ride.service');
const {validationResult} = require('express-validator');

module.exports.createRide = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination, vehicleType } = req.body;

    if ( !pickup || !destination || !vehicleType) {
        return res.status(400).json({ error: 'pickup, destination and vehicleType are required' });
    }

    try {
        const ride = await rideService.createRide({
            user: req.user._id, // Assuming user is set in auth middleware
            pickup: pickup,
            destination: destination,
            vehicleType: vehicleType
        });
        return res.status(201).json(ride);
    } catch (error) {
        console.error('Error creating ride:', error);
        return res.status(500).json({ error: 'Failed to create ride' });
    }
}