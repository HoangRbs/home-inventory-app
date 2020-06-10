const express = require('express');
const welcomeRouter = express.Router();
const welcomeController = require('../controllers/welcomeController');

welcomeRouter.route('/')
  .get(welcomeController.getWelcomeMessage);

module.exports = welcomeRouter;