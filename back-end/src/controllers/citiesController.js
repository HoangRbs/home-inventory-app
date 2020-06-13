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
  if(!isNaN(id)){
    const [city] = await queries.findById(id);

    if(city){
      res.json({
        status: 'success',
        data: city
      })
    }

    return next();  // go the the next middleware --> go deep down to the notFoundUrl
  }
  else {
    const err = new AppError('Invalid ID', 422);
    throw err; // catchAsync catch the error
  }
})