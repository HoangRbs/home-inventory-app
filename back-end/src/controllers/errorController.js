const AppError = require('../utils/AppError');

exports.notFoundUrl =(req,res,next) => {
  const err = new AppError(`could not find the url ${req.originalUrl}`,404);
  next(err);
}

exports.globalErrHandler =(err,req,res,next) => {
  console.error(err.stack);
  console.log({
    err: err.err_message
  });

  res.json({
    status: err.err_status,
    err_message: err.err_message
  });
}