const productsModel = require('./products');
const stylesModel = require('./styles');
const relatedModel = require('./related');
const skusModel = require('./skus');

module.exports = {
  products: productsModel,
  styles: stylesModel,
  related: relatedModel,
  skus: skusModel
};