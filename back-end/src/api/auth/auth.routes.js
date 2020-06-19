const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

// router = 'host/api/v1/auth'
  
router.route('/signup')
  .post(authController.signUp);

module.exports = router;