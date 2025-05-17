const captainModel = require('../models/Captain.model');

exports.createCaptain = async (captainData) => {
  const { 
    firstName, 
    lastName, 
    email, 
    password, 
    vehicle
  } = captainData;
  
  // Validate required fields
  if (!firstName || !email || !password) {
    throw new Error('Basic captain information is required');
  }
  
  if (!vehicle || !vehicle.color || !vehicle.numberPlate || !vehicle.capacity || !vehicle.vehicleType) {
    throw new Error('Vehicle information is required');
  }
  
  // Create captain
  const captain = await captainModel.create({
    firstName,
    lastName,
    email,
    password,
    vehicle: {
      color: vehicle.color,
      numberPlate: vehicle.numberPlate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType
    },
    location: captainData.location
  });
  
  return captain;
};