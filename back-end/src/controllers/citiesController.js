const catchAsync = require('../utils/catchAsync');

exports.getAllCities = catchAsync((req,res,next) => {
  res.json({
    status: 'success',
    data: []
  });
});