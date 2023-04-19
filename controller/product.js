const productService = require('../service/product.js');
const { validateProduct } = require('../validations/productValidations.js');

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

exports.getProducts = async (req, res, next) => {
  try {
    const products = await productService.getProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

exports.getOneProductById = async (req, res, next) => {
  try {
    const product = await productService.getOneProductById(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  if(req.files.length > 0) req.body.images = req.files.map(f => ( f.path));
  const productId = req.body.id;
  delete req.body.id;
  try {
    const product = await productService.updateProduct(productId, req.body);
    res.json(product);
  } catch (err) {
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await productService.deleteProduct(req.query.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
};

exports.searchProduct = async (req, res, next) => {
  try {
    const products = await productService.searchProduct(req.query.name);
    res.json(products);
  } catch (err) {
    next(err);
  }
};
