const { Router } = require('express');
const router = Router();
const ItemController = require('../controllers/item');

router.get('/', ItemController.getItem);
router.post('/', ItemController.addItem);

module.exports = router;
