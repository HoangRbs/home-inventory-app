// setup tests
const knex_con = require('../db');

module.exports = async () => {
  await knex_con.migrate.rollback();
  await knex_con.migrate.latest();
  await knex_con.seed.run();
}