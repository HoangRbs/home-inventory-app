const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');

// router = 'host/api/v1/users'

router.route('/')
  .get(usersController.getAllUsers);

router.route('/:id')
  .get(usersController.getOneUser);
  
module.exports = router;