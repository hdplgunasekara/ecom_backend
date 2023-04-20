/**
 * @file Product validation
 * @summary Product domain operations request validation schemas
 */
const Joi = require('joi');
/**
 * Validation  for add product request body
 */
const validateProduct= (data) => {
	const schema = Joi.object({
        sku: Joi.string().required().label('SKU'),
        product_name: Joi.string().required().label('Product Name'),
        price: Joi.number().required().label('Price'),
        quantity: Joi.number().required().label('Quantity'),
        product_description: Joi.string().required().label('Product Description'),
        images: Joi.array().label('Images').optional(),	
	});
	return schema.validate(data);
};
//
module.exports= {validateProduct};