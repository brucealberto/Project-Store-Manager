const Joi = require('joi');

const validateJoi = Joi.object({
  productId: Joi.number().min(1).required(),
  quantity: Joi.number().min(1).required(),
});

const middlewareSalesJoi = (req, res, next) => {
  const sales = req.body;
  sales.forEach((sale) => {
  const { error } = validateJoi.validate(sale);
  if (error) {
    const statusCode = error.message.includes('required') ? 400 : 422;
      res.status(statusCode).json({ message: error.message });
    }
  });
  
    next();
};

module.exports = {
  middlewareSalesJoi,
};
