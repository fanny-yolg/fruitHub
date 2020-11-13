const { Product } = require('../models/product');

class ProductController {
  static async addProduct(req, res, next) {
    try {
      const product = await Product.create(req.body);

      res.status(201).json({
        success: true,
        message: 'Successfully create a product!',
        product,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProductController;
