// src/models/restauarant.model.js
const mongoose = require('mongoose');

// Define the restauarnt schema
const restauarntSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true, // Name is a required field

  },
    ratings: {
      type: Number,
      required: true,
      min: 0,
      max: 5
    },
    type: {
      type: String,
      required: true
    }
});

// Create the restaurant model
const restaurant = mongoose.model('Restaurant', restauarntSchema);



// Export the restaurant model
module.exports = restaurant;