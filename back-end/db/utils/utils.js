// creating tables having only id and name columns
const createTable_name = (knex,table_name) => {
  return knex.schema.createTable(table_name,(tableBuilder) => {
    tableBuilder.increments();
    tableBuilder.string('name').unique();
  })
}

// city_id ------> id in city table
const createReference =(tableBuilder,foreignTableName,notNullable = false,localColumnName = '') => {
  const definition = 
    tableBuilder
      .integer(`${localColumnName || foreignTableName}_id`)
      .unsigned()
      .references('id')
      .inTable(foreignTableName)
      .onDelete('CASCADE');

  if(notNullable)
    definition.notNullable();
}

module.exports = {
  createTable_name,
  createReference
}