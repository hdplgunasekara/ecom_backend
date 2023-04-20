/**
 * @file Product service
 * @summary Product realated services
 */
const Product = require('../models/product.js');
/**
 * Register user in cognito service
 * @param {Object} productData
 * @param {Array} imageUrl
 * @returns {Promise<Object>}
 */
exports.addProduct = async (productData,imageUrl) => {
  const product = new Product(productData);
  product.images = imageUrl.map(f => ( f.path));
  await product.save();
  return product;
};
/**
 * Get all products service
 * @returns {Promise<Array>}
*/
exports.getProducts = async () => {
  const products = await Product.find();
  return products;
};
/**
 * Get one product by id service
 * @param {String} id
 * @returns {Promise<Object>}
 */
exports.getOneProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};
/**
 * Update product service
 * @param {String} id
 * @param {Object} updates
 * @returns {Promise<Object>}
 */
exports.updateProduct = async (id, updates) => {
  const product = await Product.findByIdAndUpdate(id, updates, { new: true }); 
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};
/**
 * Delete product service
 * @param {String} id
 * @returns {Promise<Object>}
 */
exports.deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};
/**
 * Search product service
 * @param {String} query
 * @returns {Promise<Array>}
 */
exports.searchProduct = async (query) => {
  const products = await Product.find({ product_name: { $regex: query, $options: 'i' } });
  return products;
};
