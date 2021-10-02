const router = require('express').Router();
const controller = require('./controller');

router.get('/products/:product_id', controller.getProductById);
router.get('/products/:product_id/styles', controller.getProductStyles);
router.get('/products', controller.getProducts);

module.exports.router = router;