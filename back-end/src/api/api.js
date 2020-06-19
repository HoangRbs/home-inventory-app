const express = require('express');
const router = express.Router();
const cities = require('./cities/cities.routes');
const users = require('./users/users.routes');
const auth = require('./auth/auth.routes');

// router = "host/api/v1"

router.use('/cities',cities);
router.use('/users',users);
router.use('/auth',auth);

module.exports = router;