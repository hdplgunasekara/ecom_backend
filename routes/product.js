/**
 * @file Product route
 * @summary Express router for product related application programing interfaces
 */
const router = require("express").Router();
require("dotenv").config();
const multer = require('multer');
//
const { storage } = require('../cloudinary');
const upload = multer({ storage });
//Import product controller
const productController = require("../controller/product.js");

//Add product
router.post("/",upload.array('images'), productController.addProduct);

//Get all products
router.get("/", productController.getProducts);

//Get product from id
router.get("/get-one/:id", productController.getOneProductById);

//Update product
router.put("/",upload.array('images'), productController.updateProduct);

//Delete product
router.delete("/delete", productController.deleteProduct);

//Search product
router.get("/search", productController.searchProduct);

module.exports = router;
