const { Router } = require('express');
const router = Router();
const ItemRoutes = require('./item');

router.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Home Page',
  });
});

router.use('/api/v1/item', ItemRoutes);

module.exports = router;
