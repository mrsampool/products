const {pool} = require('../');

module.exports = {

  queryAll: () => {
    return new Promise( (resolve, reject) =>{
      pool.query('SELECT * FROM products LIMIT 5;')
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
            (SELECT jsonb_build_object(
            'feature', feature,
            'value', value
          ) FROM features WHERE product_id=$1 )
        ))
        FROM products WHERE id=$1;
      `, [id])

      .then( data =>{
        resolve(data)
      })
      .catch( reject );
    });
  }

};