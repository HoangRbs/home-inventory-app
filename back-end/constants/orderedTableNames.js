const tableNames = require('./tableNames');

// ordered is used to delete datas in tables followed by order
// order is important since tables depends on each other
// be careful to know which table to remove first 
const orderedTableNames = [
  tableNames.company,
  tableNames.adress,
  tableNames.city,
  tableNames.country,
  tableNames.shape,
  tableNames.user,
  tableNames.item_type,
  tableNames.inventory_location,
  tableNames.item,
  tableNames.item_image,
  tableNames.item_info,
  tableNames.size
]

module.exports = orderedTableNames;