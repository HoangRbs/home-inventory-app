// get knex connection to be used in the whole project

const knex = require('knex');
const knex_config = require('./knexfile');

const connection_env = process.env.NODE_ENV || 'development';

const knex_final_config = knex_config[connection_env];

const knex_connection = knex(knex_final_config); // return a knex object with connected database

module.exports = knex_connection;