const { Router } = require('express');
const router = Router();
const ItemRoutes = require('./item');

router.get('/', (req, res, next) => {
  res.status(200).json('HOME PAGE');
});

router.use('/api/v1/item', ItemRoutes);

module.exports = router;
