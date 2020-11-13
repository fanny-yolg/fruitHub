const { Router } = require('express');
const router = Router();
const ItemRoutes = require('./item');
const CategoryRoutes = require('./category');
const ProductRoutes = require('./product');

router.get('/', (req, res, next) => {
  res.status(200).json('HOME PAGE');
});

router.use('/api/v1/item', ItemRoutes);
router.use('/api/v1/category', CategoryRoutes);
router.use('/api/v1/product', ProductRoutes);

module.exports = router;
