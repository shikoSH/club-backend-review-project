
const restaurantRepository = require('../repositories/restaurant.repository');


// Service function to get all restaurants
async function getAllRestaurants() {
  return await restaurantRepository.getAllRestaurants();
}

async function createRestaurant(restaurantData) {
  return await restaurantRepository.createRestaurant(restaurantData);
}


// Exporting the service functions for use in the controller
module.exports = {
  getAllRestaurants,
  createRestaurant
};
