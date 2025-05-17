
const mongoose = require('mongoose');


function connectToDb() {
  // Connect to MongoDB
  mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
}

// Export mongoose instance
module.exports = connectToDb;