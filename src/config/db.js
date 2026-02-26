//initialize a connection to MongoDB using Mongoose, handling connection success and error cases
const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected ✅');
  } catch (err) {
    // Log the error and exit the process if connection fails
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the app if DB connection fails
  }
};

module.exports = connectDB;