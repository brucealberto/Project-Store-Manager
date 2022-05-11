const Joi = require('joi');

const validateProduct = Joi.object({
  name: Joi.string().min(5).required(),
  quantity: Joi.number().min(1).required(),
});

const validateJoi = Joi.object({
  productId: Joi.number().min(1).required(),
  quantity: Joi.number().min(1).required(),
});

const validateSales = (sales) => {
sales.forEach((sale) => validateJoi.validate(sale));
};

module.exports = {
  validateProduct,
  validateSales,
};