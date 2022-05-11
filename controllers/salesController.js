const salesService = require('../services/salesService');

const listAllSales = async (req, res, _next) => {
  try {
    const sales = await salesService.listAllSales();
    return res.status(200).json(sales);
  } catch (error) {
  console.log(' salesController.js ~ listAllSales', error); 
  }
};

const listSalesById = async (req, res, _next) => {
  try {
    const { id } = req.params;
    const salesId = await salesService.listsalesById(id);
    console.log('controller', salesId);
    return res.status(200).json(salesId);
  } catch (error) {
    console.log('salesController.js ~listSalesById', error);
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
 listAllSales,
 listSalesById,
};