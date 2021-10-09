const router = require('express').Router();
const controller = require('./controller');

router.get('/products/:product_id', controller.getProductById);
router.get('/products/:product_id/styles', controller.getProductStyles);
router.get('/products/:product_id/related', controller.getRelatedProducts);
router.get('/products', controller.getProducts);

router.get('/products', controller.getProducts);

module.exports.router = router;