const mapsservice = require('../services/maps.service');
const {validationResult} = require('express-validator');


module.exports.getCoordinates = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { address } = req.query;

    if (!address) {
        return res.status(400).json({ error: 'Address is required' });
    }

    try {
        const coordinates = await mapsservice.getAddressCoordinates(address);
        return res.status(200).json(coordinates);
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        return res.status(500).json({ error: 'Failed to fetch coordinates' });
    }
}


module.exports.getDistanceTime = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { origins, destinations } = req.query;

    if (!origins || !destinations) {
        return res.status(400).json({ error: 'Origins and destinations are required' });
    }

    try {
        const distanceTime = await mapsservice.getDistanceTime(origins, destinations);
        return res.status(200).json(distanceTime);
    } catch (error) {
        console.error('Error fetching distance and time:', error);
        return res.status(500).json({ error: 'Failed to fetch distance and time' });
    }
}



module.exports.getSuggestions = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { input } = req.query;

    if (!input) {
        return res.status(400).json({ error: 'Input is required' });
    }

    try {
        const suggestions = await mapsservice.getSuggestions(input);
        return res.status(200).json(suggestions);
    } catch (error) {
        console.error('Error fetching suggestions:', error);
        return res.status(500).json({ error: 'Failed to fetch suggestions' });
    }
}