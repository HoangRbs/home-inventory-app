const tableNames = require('../../constants/tableNames');
const {createReference,createTable_name} = require('../utils/utils');
const Knex = require('knex');

/**
 * @param {Knex} knex
 */

exports.up = async (knex) => {
  // modify existing tables
  await knex.schema.table(tableNames.city,tableBuilder => {
    createReference(tableBuilder,tableNames.country,true);
  })

  // create new tables
  await knex.schema.createTable(tableNames.size,(tableBuilder) => {
    tableBuilder.increments();
    tableBuilder.string('name',255);
    createReference(tableBuilder,tableNames.shape);
    tableBuilder.float('volumn');
  });

  await knex.schema.createTable(tableNames.item,tableBuilder => {
    tableBuilder.increments();
    createReference(tableBuilder,tableNames.user);
    createReference(tableBuilder,tableNames.company);
    createReference(tableBuilder,tableNames.size);
    createReference(tableBuilder,tableNames.item_type);
    tableBuilder.string('name');
    tableBuilder.integer('quantity');
    tableBuilder.text('description');
  });

  await knex.schema.createTable(tableNames.inventory_location, tableBuilder => {
    tableBuilder.increments();
    tableBuilder.string('name');
    tableBuilder.text('description');
    tableBuilder.string('image_url');
  });

  await knex.schema.createTable(tableNames.item_info, tableBuilder => {
    tableBuilder.increments();
    tableBuilder.integer('price');
    tableBuilder.dateTime('purchase_date');
    tableBuilder.dateTime('expiration_date');
    createReference(tableBuilder,tableNames.item);
    createReference(tableBuilder,tableNames.user);
    createReference(tableBuilder,tableNames.company,false,'retailer_id');
  });

  await knex.schema.createTable(tableNames.item_image, tableBuilder => {
    tableBuilder.increments();
    tableBuilder.string('image_url');
    createReference(tableBuilder,tableNames.item);
  });
}

/**
 * @param {Knex} knex
 */

exports.down = async (knex) => {
  // undo the modificatons first
  await knex.schema.table(tableNames.city,tableBuilder => {
    // undo create reference country == dropColumn 'country_id'
    tableBuilder.dropColumn('country_id');
  });

  // then undo create tables == drop the tables
  
  // PROMISE.ALL([...])
  // P.all[drop table 1] -> P.all[drop table 1,table 2] 
  // -> P.all[ drop table1, 2 ,3] -> ... using reduce/ accumulator
  // P.all cannot handle promise order , but if drop Table 1 if exist already did
  // next time drop table 1 will be skip and drop table 2 is possible (table 2 depends on table 1)

  await Promise.all([
    tableNames.item_image,
    tableNames.item_info,
    tableNames.item,
    tableNames.size,
    tableNames.inventory_location
  ].reduce((accumulator,table_name) => {
    accumulator.push(knex.schema.dropTableIfExists(table_name));
    return accumulator;
  },[]));

  // [  useless method
  //   tableNames.item_image,
  //   tableNames.item_info,
  //   tableNames.item,
  //   tableNames.size,
  //   tableNames.inventory_location
  // ].forEach(async table_name => {
  //   try{
  //     await knex.schema.dropTableIfExists(table_name);
  //   }catch(e){
  //     console.log(`error: ${e}`);
  //   }
  // });
};
