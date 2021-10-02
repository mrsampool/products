const {pool} = require('../index');

module.exports = {

  queryByProductId: function queryRelatedByProductId(id){
    return new Promise( (resolve, reject) =>{
      pool.query(`
        SELECT array(
          SELECT related_product_id 
          FROM related 
          WHERE current_product_id=$1 
          GROUP BY related_product_id
        );
      `, [id])
      .then( ({rows}) => resolve(rows[0].array) )
      .catch( reject );
    });
  }

}