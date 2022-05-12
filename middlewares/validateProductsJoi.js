const Joi = require('joi');

const validateProductsJoi = Joi.object({
  name: Joi.string().min(5).required(),
  quantity: Joi.number().min(1).required(),
});

const middlewareProductsJoi = (req, res, next) => {
  const { error } = req.body;
  validateProductsJoi.validate(error);

  if (error) {
    const statusCode = error.message.includes('Product already exists') ? 409 : 201;
      res.status(statusCode).json({ message: error.message });
    }
  next();
};

module.exports = {
  middlewareProductsJoi,
};