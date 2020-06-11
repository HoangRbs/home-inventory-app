const catchAsync = require('../utils/catchAsync');
const queries = require('../api/cities/cities.queries');

exports.getAllCities = catchAsync((req,res,next) => {
  const cities = await queries.find();

  res.json({
    status: 'success',
    data: cities
  });
});