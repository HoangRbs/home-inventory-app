const catchAsync = require('../utils/catchAsync');
const queries = require('../api/users/users.queries');
const AppError = require('../utils/AppError');
const knex_conn = require('../../db');
const tableNames = require('../../constants/tableNames');


exports.signUp = catchAsync(async (req,res,next) => {
  let { name,email,password } = req.body;

  await knex_conn(tableNames.user)
    .insert({
      name,email,password
    })

  return res.json({
    status: 'success',
    message: 'user created'
  });
});