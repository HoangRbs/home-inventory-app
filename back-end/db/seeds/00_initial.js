const orderedTableNames = require('../../constants/orderedTableNames');
const tableNames = require('../../constants/tableNames');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const Knex = require('knex');
const countries = require('../../constants/countries');
const cities = require('../../constants/cities');

/**
 * @param {Knex} knex
 */

exports.seed = async (knex) => {
  // delete all the rows first 
  // reseting for the first time in production and multiple times in testing
  await Promise.all(
    orderedTableNames.map(table_name => knex(table_name).del())
  );

  // insert datas
  // await knex('table_name').insert([
  //   {id: 1, colName: 'rowValue1'},
  //   {id: 2, colName: 'rowValue2'},
  //   {id: 3, colName: 'rowValue3'}
  // ]);
    
  let password = crypto.randomBytes(15).toString('hex');
  password = await bcrypt.hash(password,12);

  const user1 = {
    name: 'hoang minh',
    email: 'hoangrbs@gmail.com',
    password: password
  }

  await knex(tableNames.user).insert([
    user1
  ]);

  await knex(tableNames.country).insert(countries);
  await knex(tableNames.city).insert(cities);
};
