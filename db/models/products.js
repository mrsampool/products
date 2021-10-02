const {pool} = require('../index');

module.exports = {

  queryAll: (count, page) => {
    return new Promise( (resolve, reject) =>{
      pool.query('SELECT * FROM products LIMIT $1 OFFSET $2;', [count, page])
      .then( data => resolve(data) )
      .catch( reject );
    });
  },

  queryById: (id) => {
    return new Promise( (resolve, reject) =>{
      pool.query(
        `SELECT  
          id,
          name,
          slogan,
          description,
          category,
          default_price,
          (SELECT array(
            (SELECT json_build_object(
              'feature', feature,
              'value', value
            ) FROM features WHERE product_id=$1 )
          ) AS "features")
          FROM products WHERE id=$1;
      `, [id])

      .then( data =>{
        resolve(data)
      })
      .catch( reject );
    });
  }

};