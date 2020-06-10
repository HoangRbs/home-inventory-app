const catchAsync = require('../utils/catchAsync');

exports.getWelcomeMessage = catchAsync(async (req,res,next) => {
  res.json({
    status: 'success',
    data: ' welcome to home inventory app '
  })
})