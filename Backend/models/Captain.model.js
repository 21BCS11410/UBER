const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, 'First name must be at least 3 characters long']
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, 'Last name must be at least 3 characters long']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId:{
    type: String,
  },

  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive'
  },

  vehicle: {
    color:{
        type: String,
        required: true,
        minlength: [3, 'Color must be at least 3 characters long']
    },
    numberPlate:{
        type: String,
        required: true,
        minlength: [3, 'Plate must be at least 3 characters long']
    },
    capacity:{
        type: Number,
        required: true,
        min: [1, 'Capacity must be at least 1']
    },
    vehicleType:{
        type: String,
        required: true,
        enum: ['car', 'auto', 'bike'],
    },
  },

  location:{
    latitude:{
        type: Number,
    },
    longitude:{
        type: Number,
    }
  }
  
});

captainSchema.methods.generateAuthToken = async function () {
  const captain = this;
  const token = jwt.sign({ _id: captain._id.toString() }, process.env.JWT_SECRET, { expiresIn: '24h' });
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  const captain = this;
  const isMatch = await bcrypt.compare(password, captain.password);
  return isMatch;
}

captainSchema.statics.hashPassword = async function (password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
}


const captainModel = mongoose.model('Captain', captainSchema);
module.exports = captainModel;