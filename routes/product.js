const { Router } = require('express');
const router = Router();

const ProductController = require('../controllers/product');

router.post('/', ProductController.addProduct);

module.exports = router;
