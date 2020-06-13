const knex_connection = require('../../../db.js');
const tableNames = require('../../../constants/tableNames');

const fields = ['name']

exports.find =() => {
  // return a promise
  return knex_connection
          .select(...fields)
          .from(tableNames.city); 
}

exports.findById =(id) => {
  return knex_connection
          .select(...fields)
          .from(tableNames.city)
          .where({id: id});
}