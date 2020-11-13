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
        data: addItem,
      });
    } catch (err) {
      next(err);
    }
  }

  static async editItem(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) return next({ message: 'Missing ID Params' });

      const updatedData = await Item.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );

      res.status(200).json({
        success: true,
        message: 'Successfully update a student!',
        data: updatedData,
      });
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) return next({ message: 'Missing ID Params' });

      await Item.findByIdAndRemove(id, (error, doc, result) => {
        if (error) throw 'Failed to delete';
        if (!doc)
          return res
            .status(400)
            .json({ success: false, err: 'Data not found' });

        res.status(200).json({
          success: true,
          message: 'Successfully delete data!',
          data: doc,
        });
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ItemController;
