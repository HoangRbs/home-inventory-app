const AppError = require('../utils/AppError');

exports.notFoundUrl =(req,res,next) => {
  const err = new AppError(`url not found ${req.originalUrl}`,404);
  next(err);
}

exports.globalErrHandler =(err,req,res,next) => {
  // console.error(err.stack); development only

  res.status(err.err_code).json({
    status: err.err_status,
    err_message: err.err_message
  });
}