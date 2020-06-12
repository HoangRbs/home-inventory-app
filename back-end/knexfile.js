// Update with your config settings.
// this file can be created with npx knex init
// for more info see migration in knex.js documentation
require('dotenv').config();


module.exports = {

  development: {
    client: 'pg',

    //connect to database
    connection: {
      host: process.env.POSTGRES_DB_HOST,
      database: process.env.POSTGRES_DB,
      user:     process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    },

    //determine migration folder
    //migration is for creating databases
    migrations: {
      directory: './db/migrations'
    },

    //determine the seeds folder
    // seed is for creating inital datas inside database
    seeds: {
      directory: './db/seeds'
    }
  },
  test: {
    client: 'pg',

    //connect to database
    connection: {
      host: process.env.POSTGRES_DB_HOST,
      database: process.env.POSTGRES_TEST_DB,
      user:     process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    },

    //determine migration folder
    //migration is for creating databases
    migrations: {
      directory: './db/migrations'
    },

    //determine the seeds folder
    // seed is for creating inital datas inside database
    seeds: {
      directory: './db/seeds'
    }
  }
};
