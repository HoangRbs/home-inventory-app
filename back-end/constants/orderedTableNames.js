const tableNames = require('./tableNames');

// ordered is used to delete datas in tables followed by order
// order is important since tables depends on each other
// be careful to know which table to remove first 
const orderedTableNames = [
  tableNames.manufacture,
  tableNames.manufacture_address,
  tableNames.city,
  tableNames.country,
  tableNames.shape,
  tableNames.user,
  tableNames.item_type
]

module.exports = orderedTableNames;