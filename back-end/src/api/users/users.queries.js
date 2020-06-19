const knex_connection = require('../../../db.js');
const tableNames = require('../../../constants/tableNames');

const fields = ['id','name','email']

exports.find =() => {
  // return a promise
  return knex_connection
          .select(...fields)
          .from(tableNames.user); 
}

exports.findById =(id) => {
  return knex_connection
          .select(...fields)
          .from(tableNames.user)
          .where({id: id})
          .first();
}