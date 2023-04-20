const productService = require('../service/product.js');
const { validateProduct } = require('../validations/productValidations.js');
/**
 * Add product application programing interface
 * @param {Request} req - http request
 * @param {Response} res - http response
 * @returns {Response}
 **/
exports.addProduct = async (req, res, next) => {
  try {
    // Validate request body
    const { error } = validateProduct(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });
    //
    const product = await productService.addProduct(req.body, req.files);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};
/**
 * Get all products application programing interface
 * @param {Request} req - http request
 * @param {Response} res - http response
 * @returns {Response}
 **/
exports.getProducts = async (req, res, next) => {
  try {
    const products = await productService.getProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
};
/**
 * Get one product by id application programing interface
 * @param {Request} req - http request
 * @param {Response} res - http response
 * @returns {Response}
 **/
exports.getOneProductById = async (req, res, next) => {
  try {
    const product = await productService.getOneProductById(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
};
/**
 * Update product application programing interface
 * @param {Request} req - http request
 * @param {Response} res - http response
 * @returns {Response}
 **/
exports.updateProduct = async (req, res, next) => {
  if(req.files.length > 0) req.body.images = req.files.map(f => ( f.path));
  const productId = req.body.id;
  delete req.body.id;
  try {
     // Validate request body
     const { error } = validateProduct(req.body);
     if (error)
       return res.status(400).send({ message: error.details[0].message });
     //
    const product = await productService.updateProduct(productId, req.body);
    res.json(product);
  } catch (err) {
    next(err);
  }
};
/**
 * Delete product application programing interface
 * @param {Request} req - http request
 * @param {Response} res - http response
 * @returns {Response}
 **/
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await productService.deleteProduct(req.query.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
};
/**
 * Search product application programing interface
 * @param {Request} req - http request
 * @param {Response} res - http response
 * @returns {Response}
 **/
exports.searchProduct = async (req, res, next) => {
  try {
    const products = await productService.searchProduct(req.query.name);
    res.json(products);
  } catch (err) {
    next(err);
  }
};
