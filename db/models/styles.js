const {pool} = require('../');
const skus = require('./skus');

module.exports = {

  queryByProductId: (id) => {
    return new Promise( (resolve, reject) =>{

      pool.query(`
        SELECT
          style_id,
          name,
          original_price,
          sale_price,
          default_ AS "default?",

          (SELECT array(
            SELECT json_build_object(
              'thumbnail_url', thumbnail_url,
              'url', url
            ) FROM photos WHERE photos.style_id=styles.style_id
          ) AS photos),

          (SELECT jsonb_object_agg(
            id, json_build_object(
              'quantity', quantity,
              'size', size
            )
          ) AS "skus"
          FROM skus
          WHERE skus.style_id=styles.style_id)

        FROM styles
        WHERE product_id=$1;
        `,
        [id]
      )

      .then( ({rows}) => {
        resolve( rows  );
      })
      .catch( reject );
    });
  }

};