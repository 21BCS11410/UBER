const rideModel = require('../models/ride.model');
const mapsservice = require('./maps.service');
const crypto = require('crypto');



// Calculate fare based on vehicle type and distance/time
async function getFare(pickUp, destination) {
    if(!pickUp || !destination) {
        throw new Error('PickUp and destination are required');
    }

    const distanceAndTime = await mapsservice.getDistanceTime(pickUp, destination);

    // Base fare for each vehicle type
    const baseFare = {
        bike: 10,
        auto: 20, 
        car: 30
    };

    // Per km rate for each vehicle
    const perKmRate = {
        bike: 6,
        auto: 10,
        car: 12
    };

    // Per minute rate for each vehicle
    const perMinRate = {
        bike: 3,
        auto: 5,
        car: 8
    };

    // Calculate fares for each vehicle type


    const fares = {
        bike: baseFare.bike + ((distanceAndTime[0].elements[0].distance.value/1000) * perKmRate.bike) + (distanceAndTime[0].elements[0].duration.value * perMinRate.bike),
        auto: baseFare.auto + ((distanceAndTime[0].elements[0].distance.value/1000) * perKmRate.auto) + (distanceAndTime[0].elements[0].duration.value * perMinRate.auto),
        car: baseFare.car + ((distanceAndTime[0].elements[0].distance.value/1000) * perKmRate.car) + (distanceAndTime[0].elements[0].duration.value * perMinRate.car)
    };

    console.log('Fares:', fares);

    return fares;
}  

 function getOtp(num) {
    // Generate random bytes using crypto
    
    // Generate random number between 0-9 for specified number of digits
    const otp = crypto.randomInt(Math.pow(10, num-1), Math.pow(10, num)-1);
    
    return otp;
} 


module.exports.createRide = async ({
    user,
    pickup,
    destination,
    vehicleType,
}) => {

    if(!user || !pickup || !destination || !vehicleType) {
        throw new Error('User, pickUp, destination and vehicleType are required');
    }

    const fares = await getFare(pickup, destination);


    const ride = await rideModel.create({
        user,
        pickup,
        destination,
        otp: getOtp(6),
        fare: Math.round(fares[vehicleType]/100),
    });

    return ride;
}




  

