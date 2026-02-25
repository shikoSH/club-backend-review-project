const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to local MongoDB
mongoose.connect('mongodb://localhost:27017/IEEE')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('connection error:', err));

// Student APIs
app.use('/restaurant_ratings', restaurant_ratingsRoutes);
app.use('/restaurant_reviews', restaurant_reviewsRoutes);
//TODO - Course API

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on http://0.0.0.0:3000');
});