
const restauarntRepository = require('../repositories/student.repository');


// Service function to get all restaurants
async function getAllRestaurants() {
  return await restauarntRepository.getAllRestaurants();
}

async function createRestaurants(restaurantData) {
  return await restauarntRepository.createRestaurant(restaurantData);
}


// Exporting the service functions for use in the controller
module.exports = {
  getAllRestaurants,
  createRestaurants
};
