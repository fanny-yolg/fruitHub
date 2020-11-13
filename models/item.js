const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    subWeight: {
      type: Number,
      default: 0,
    },
    subTotal: {
      type: Number,
      default: 0,
    },
    user: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    product: { type: Schema.Types.ObjectId, ref: 'Product', default: null },
  },
  { timestamps: true, versionKey: false }
);
const item = mongoose.model('Item', itemSchema);

exports.Item = item;
