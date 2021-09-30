const {pool} = require('../');
const skus = require('./skus');

module.exports = {

  queryByProductId: (id) => {
    return new Promise( (resolve, reject) =>{

      pool.query('SELECT * FROM styles WHERE product_id=$1;', [id])
      .then( data => {
        console.log(data.rows)
        resolve({ product_id: id, results: data.rows } );
      })
      .catch( reject );
    });
  }

};