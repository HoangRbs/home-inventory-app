const AppError = require('../utils/AppError');

exports.notFoundUrl =(req,res,next) => {
  const err = new AppError(`could not find the url ${req.originalUrl}`,404);
  next(err);
}

exports.globalErrHandler =(err,req,res,next) => {
  console.error(err.stack);

  res.json({
    status: err.err_status,
    err_message: err.err_message
  });
}