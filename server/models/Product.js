const { Schema, model } = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const Product = model('Product', cartSchema);

module.exports = Product;