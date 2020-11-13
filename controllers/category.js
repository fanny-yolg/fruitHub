const { Category } = require('../models/category');

exports.addCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Successfully create a category!',
      category,
    });
  } catch (err) {
    next(err);
  }
};
