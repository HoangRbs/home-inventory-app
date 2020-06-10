const catchAsync =(async_fn) => {
  return async(req,res,next) => {
    try { 
      await async_fn(req,res,next);
    } catch(e) {
      next(e);
    }
  }
}

module.exports = catchAsync;