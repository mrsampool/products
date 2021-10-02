const {products, styles, related} = require('../db/models');

module.exports = {

  getProducts: (req, res, next) => {
    let limit = 5;
    let offset = 0;
    if (req.query){
      if (req.query.count){ limit = req.query.count }
      if (req.query.page){ offset = (Number(req.query.page) - 1) * limit }
    }
    products.queryAll(limit, offset)
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
      res.status(200).send(data.rows[0])
    })
    .catch( err => console.log(err) );
  },

  getProductStyles: (req, res, next) => {

    let productId = req.params.product_id;

    styles.queryByProductId(productId)
    .then( rows => {
      res.status(200).send({
        product_id: productId,
        results: rows
      });
    })
    .catch( err => console.log(err) );
  },

  getRelatedProducts: (req, res, next) => {
    related.queryByProductId(req.params.product_id)
    .then( related => res.status(200).send(related) );
  }

}