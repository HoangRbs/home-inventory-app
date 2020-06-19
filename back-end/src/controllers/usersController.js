const catchAsync = require('../utils/catchAsync');
const queries = require('../api/users/users.queries');
const AppError = require('../utils/AppError');
const knex_conn = require('../../db');
const tableNames = require('../../constants/tableNames');

exports.getAllUsers = catchAsync(async (req,res,next) => {
  const users = await queries.find();

  res.json({
    status: 'success',
    data: users
  });
});

exports.getOneUser = catchAsync(async (req,res,next) => {
  const { id } = req.params;

  const user = await queries.findById(parseInt(id));

  if(user){
    return res.json({
      status: 'success',
      data: user
    })
  }

  return next();  // go the the next middleware --> go deep down to the notFoundUrl

})