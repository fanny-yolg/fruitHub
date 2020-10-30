const { Router } = require('express');
const router = Router();
const ItemController = require('../controllers/item');

router.get('/', ItemController.getItem);

module.exports = router;
