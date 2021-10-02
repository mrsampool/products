const {pool} = require('../');

module.exports = {

  query: function queryCartBySession(sessionId){
    return new Promise( (resolve, reject) =>{
      pool.query(`
        SELECT 
        product_id AS sku_id, 
        count(product_id) 
        FROM cart 
        WHERE user_session=$1
        GROUP BY product_id;`,
        [sessionId]
      )
      .then( ({rows}) => resolve(rows) )
      .catch( reject );
    })
  },

  insert: function insertCartProduct(productObj){
    let {user_session, product_id} = productObj;
    return new Promise( (resolve, reject) =>{
      pool.query(`
        INSERT INTO cart
        (user_session, product_id, active)
        VALUES
        ($1, $2, true)
        RETURNING id;
      `,
        [user_session, product_id]
        ).then( ({rows}) => resolve(rows[0].id) )
      .catch( reject );
    });

  },

  delete: function removeFromCart(id){
    return new Promise( (resolve, reject) =>{
      pool.query(`
        DELETE FROM cart WHERE id=$1;
      `, [id]).then( data => resolve(data) );
    });
  }

}