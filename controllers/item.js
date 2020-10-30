const { Item } = require('../models/item');

class ItemController {
  static async getItem(req, res, next) {
    try {
      const items = await Item.find();
      res.status(200).json({
        success: true,
        message: 'Successfully retrieve data!',
        items,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ItemController;
