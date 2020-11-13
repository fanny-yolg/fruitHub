const { Router } = require('express');
const router = Router();
const ItemController = require('../controllers/item');

router.get('/', ItemController.getItem);
router.post('/', ItemController.addItem);
router.put('/:id', ItemController.editItem);
router.delete('/:id', ItemController.delete);

module.exports = router;
