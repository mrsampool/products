const {pool} = require('../');
const skus = require('./skus');

module.exports = {

  queryByProductId: (id) => {
    return new Promise( (resolve, reject) =>{

      pool.query(`
        SELECT
          style_id,
          product_id,
          name,
          original_price,
          sale_price,
          default_
        FROM styles WHERE product_id=$1;
        `, [id])

      .then( data => {
        console.log(data.rows)
        resolve({ product_id: id, results: data.rows } );
      })
      .catch( reject );
    });
  }

};