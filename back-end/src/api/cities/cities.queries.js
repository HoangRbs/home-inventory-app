const knex_connection = require('../../../db.js');
const tableNames = require('../../../constants/tableNames');

exports.find =() => {
  return knex_connection(tableNames.city); // return a promise
}