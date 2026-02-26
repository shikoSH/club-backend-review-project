const restaurantService = require('../services/restaurant.service');

const createRestaurant = async (req, res) => {
  try {
    const result = await restaurantService.createRestaurant(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllRestaurants = async (req, res) => {
  try {
    const result = await restaurantService.getAllRestaurants();
    res.status(200).json(result);
    } catch (error) {   
    res.status(400).json({ message: error.message });
    }
};

module.exports = {
  createRestaurant,
  getAllRestaurants
};

