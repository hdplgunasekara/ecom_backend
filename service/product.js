const Product = require('../models/product.js');

exports.addProduct = async (productData,imageUrl) => {

  const product = new Product(productData);
  product.images = imageUrl.map(f => ( f.path));
  await product.save();
  return product;
};

exports.getProducts = async () => {
  const products = await Product.find();
  return products;
};

exports.getOneProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};

exports.updateProduct = async (id, updates) => {
  const product = await Product.findByIdAndUpdate(id, updates, { new: true }); 
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};

exports.deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};

exports.searchProduct = async (query) => {
  const products = await Product.find({ product_name: { $regex: query, $options: 'i' } });
  return products;
};
