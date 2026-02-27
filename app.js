const express = require('express');
const mongoose = require('mongoose');
const restaurant_ratingsRoutes = require('./src/routes/restaurant.route');
const app = express();
app.use(express.json());

// Connect to local MongoDB
mongoose.connect('mongodb://localhost:27017/reviews_and_ratings')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('connection error:', err));

// restaurant APIs
app.use('/restaurant_ratings', restaurant_ratingsRoutes);


module.exports = app;