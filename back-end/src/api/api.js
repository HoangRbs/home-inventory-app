const express = require('express');
const router = express.Router();
const cities = require('./cities/cities.routes');

// router = "host/api/v1"

router.use('/cities',cities);

module.exports = router;