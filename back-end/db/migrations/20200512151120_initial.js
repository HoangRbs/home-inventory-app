const Knex = require('knex');

const tableNames = require('../../constants/tableNames');

const {createTable_name,createReference} = require('../utils/utils');

// using jsdoc commend for intellisense , if I want to describe knex prop in the below function
// (knex) to have functions definition of knex required
// I have to put jdsoc commend RIGHT BEFORE the function for intellisense to work

/**
 * @param {Knex} knex
 */

exports.up = async (knex) => {
  // create tables and relationship

  await Promise.all([
    // create tables with none foreign key first
    knex.schema.createTable(tableNames.user, (tableBuilder) => {
      tableBuilder.increments(); // auto increment id
      tableBuilder.string('email',255);
      tableBuilder.string('name');
      tableBuilder.string('password');
      tableBuilder.datetime('last_login');
    }),
    createTable_name(knex,tableNames.item_type),
    createTable_name(knex,tableNames.country),
    createTable_name(knex,tableNames.city),
    createTable_name(knex,tableNames.shape)
  ]);

  // then create address table since it depends on city and country table
  await knex.schema.createTable(tableNames.address,(tableBuilder) => {
    tableBuilder.increments();
    createReference(tableBuilder,tableNames.city,false);
    createReference(tableBuilder,tableNames.country);
  });

  // create company table since it depends address table
  await knex.schema.createTable(tableNames.company,(tableBuilder) => {
    tableBuilder.increments();
    tableBuilder.string('name',255);
    tableBuilder.string('description',255);
    createReference(tableBuilder,tableNames.address);
  });
};

/**
 * @param {Knex} knex
 */

exports.down = async (knex) => {
  // undo some of the migrations

  // PROMISE.ALL([...])
  // P.all[drop table 1] -> P.all[drop table 1,table 2] 
  // -> P.all[ drop table1, 2 ,3] -> ... using reduce/ accumulator
  // P.all cannot handle promise order , but if drop Table 1 if exist already did
  // next time drop table 1 will be skip and drop table 2 is possible (table 2 depends on table 1)

  await Promise.all([
    tableNames.company, 
    tableNames.address,

    tableNames.user,
    tableNames.item_type,
    tableNames.country,
    tableNames.city,
    tableNames.shape
  ].reduce((accumulator,table_name) => {
    accumulator.push(knex.schema.dropTableIfExists(table_name));
    return accumulator;  // Promises array
  },[]))
};
