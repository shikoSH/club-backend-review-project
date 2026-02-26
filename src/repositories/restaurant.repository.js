const Restaurant = require('../models/restaurant.model');

async function createRestaurant(data) {
  return await Restaurant.create(data);
};

async function getAllRestaurants() {
  return await Restaurant.find();
};


module.exports = {
  createRestaurant,
  getAllRestaurants
};