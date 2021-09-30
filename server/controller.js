const products = require('../db/models/products');
const styles = require('../db/models/styles');

module.exports = {

  getProducts: (req, res, next) => {
    products.queryAll()
    .then( data => {
      console.log(data.rows);
      res.status(200).send(data.rows)
    })
    .catch( err => console.log(err) );
  },

  getProductById: (req, res, next) => {
    products.queryById(req.params.product_id)
    .then( data => {
      console.log(data.rows);
      res.status(200).send(data.rows)
    })
    .catch( err => console.log(err) );
  },

  getProductStyles: (req, res, next) => {
    styles.queryByProductId(req.params.product_id)
    .then( data => {
      console.log(data.rows);
      res.status(200).send(data.rows)
    })
    .catch( err => console.log(err) );
  }

}