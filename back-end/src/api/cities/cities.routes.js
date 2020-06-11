const express = require('express');
const router = express.Router();
const citiesController = require('../../controllers/citiesController');

// router = 'host/api/v1/cities'

router.route('/')
  .get(citiesController.getAllCities);

module.exports = router;