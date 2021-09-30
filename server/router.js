const router = require('express').Router();
const controller = require('./controller');

router.get('/:product_id', controller.getProductById);
router.get('/:product_id/styles', controller.getProductStyles);
router.get('/', controller.getProducts);

module.exports.router = router;