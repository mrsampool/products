module.exports.queryStrings = {

  insert: function buildInsertQuery(table, fields){
    return `INSERT INTO ${table} (${
      fields.map( field =>{
        return field;
      })
    }) VALUES (${
      fields.map( (field, index) =>{
        return '$' + (index + 1);
      })
    });`;
  }

}