const salesModel = require('../models/SalesModel');

const validateSalesId = async (req, res, next) => {
  const { id } = req.params;
  const salesId = await salesModel.listSalesById(id);
  console.log('middleware', salesId.length);
  if (salesId.length === 0 || !salesId) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  next();
};

module.exports = {
  validateSalesId,
};
