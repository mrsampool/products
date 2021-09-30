const {pool} = require('../');

module.exports = {

  queryByProductId: (id) => {
    return new Promise( (resolve, reject) =>{
      pool.query('SELECT * FROM styles WHERE product_id=$1;', [id])
      .then( data => resolve(data) )
      .catch( reject );
    });
  }

};