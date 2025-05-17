const userModel = require('../models/User.model');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blacklistToken.model');

module.exports.authUser = async (req, res, next) => {
    try {
        // Get token from cookies or authorization header
        const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

        if(!token) {
            return res.status(401).json({ message: 'Token not found' });
        }

        // Check if the token is blacklisted
        const isBlackListed = await blackListTokenModel.findOne({ token });
        if(isBlackListed) {
            return res.status(401).json({ message: 'Token is blacklisted' });
        }

        // Verify token
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        // Find user
        const user = await userModel.findById(decode._id);
        if(!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        // Set user in request
        req.user = user;
        req.token = token;

        next();
    } catch (error) {
        console.error('Auth middleware error:', error);
        res.status(401).json({ message: 'Token is unauthorized' });
    }
};