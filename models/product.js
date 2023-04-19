const mongoose = require('mongoose');

// Create a new Mongoose schema for the product
const productSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true
  },
  product_name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  images: {
    type: [String],
  },
  product_description: {
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  }
});

// Create a new Mongoose model using the product schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
