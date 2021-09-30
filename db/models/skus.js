const {pool} = require('../');

module.exports = {

  queryByStyleId: (id) => {
    return new Promise( (resolve, reject) =>{
      pool.query('SELECT * FROM skus WHERE style_id=$1;', [id])
      .then( data => resolve(data) )
      .catch( reject );
    });
  }

};