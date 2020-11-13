const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      default:
        'https://res.cloudinary.com/di02ey9t7/image/upload/v1602432289/FAVPNG_samsung-galaxy-a8-a8-user-login-telephone-avatar_peutPpGD_l18hzf.png',
    },
    weight: {
      type: Number,
      required: true,
    },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
  },
  { timestamps: true, versionKey: false }
);

const product = mongoose.model('Product', productSchema);

exports.Product = product;
