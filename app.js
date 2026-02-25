const express = require('express');
const mongoose = require('mongoose');
const restaurant_ratingsRoutes = require('./routes/restaurant_ratings.routes');
const app = express();
app.use(express.json());

// Connect to local MongoDB
mongoose.connect('mongodb://localhost:27017/IEEE')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('connection error:', err));

// restaurant APIs
app.use('/restaurant_ratings', restaurant_ratingsRoutes);


module.exports = app;