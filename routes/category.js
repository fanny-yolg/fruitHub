const { Router } = require('express');
const router = Router();

const CategoryController = require('../controllers/category');

router.post('/', CategoryController.addCategory);

module.exports = router;
