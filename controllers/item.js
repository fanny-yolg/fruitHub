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
  static async addItem(req, res, next) {
    try {
      const addItem = await Item.create(req.body);
      res.status(201).json({
        success: true,
        message: 'successfully create an item',
        addItems,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ItemController;
