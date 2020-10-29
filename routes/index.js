const express = require('express');
const router = express.Router();
const ItemRoutes = require('./item');

router.use('/api/v1/item', ItemRoutes);

module.exports = router;
