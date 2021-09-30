const {pool} = require('../');
const skus = require('./skus');

module.exports = {

  queryByProductId: (id) => {
    return new Promise( (resolve, reject) =>{

      pool.query('SELECT * FROM styles WHERE product_id=$1;', [id])
      .then( data => {
        let styles = {
          product_id: id,
          results: data.rows,
        };

        const promises = [];

        data.rows.forEach( style =>{
          promises.push(
            new Promise( (resolve, reject) =>{

              skus.queryByStyleId(style.style_id)
              .then( data => {
                style.skus = {};
                data.rows.forEach(sku =>{
                  style.skus[sku.id] = {
                    quantity: sku.quantity,
                    size: sku.size
                  }
                })
                resolve();
              })
              .catch( reject );

            })
          );
        });

        Promise.all(promises)
        .then( ()=> resolve(styles) )
        .catch( reject );

      }) //resolve
      .catch( reject );
    });
  }

};