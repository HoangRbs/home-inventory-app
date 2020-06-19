const catchAsync = require('../utils/catchAsync');
const queries = require('../api/cities/cities.queries');
const AppError = require('../utils/AppError');

exports.getAllCities = catchAsync(async (req,res,next) => {
  const cities = await queries.find();

  res.json({
    status: 'success',
    data: cities
  });
});

exports.getOneCity = catchAsync(async (req,res,next) => {
  const { id } = req.params;

  const city = await queries.findById(parseInt(id));

  if(city){
    return res.json({
      status: 'success',
      data: city
    })
  }

  return next();  // go the the next middleware --> go deep down to the notFoundUrl

})