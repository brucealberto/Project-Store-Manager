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

const insertedSales = async (req, res, _next) => {
  try {
    const sales = req.body;
    const saleId = await salesService.createSales(sales);
    const salesObj = {
      id: saleId,
      itemsSold: sales,
    };
    return res.status(201).json(salesObj);
  } catch (error) {
    return res.status(404).json(error); 
  }
};

const updatedSales = async (req, res, _next) => {
  try {
    const { id } = req.params;
    const sales = req.body;
    await salesService.updateSales(id, sales);
    const salesObj = {
      saleId: id,
      itemUpdated: sales,
    };
    return res.status(200).json(salesObj);
  } catch (error) {
    return res.status(404).json(error);
  }
};

/**
 *   {
    "saleId": 1,
    "itemUpdated": [
      {
        "productId": 1,
        "quantity": 6
      }
    ]
  }
 */

module.exports = {
 listAllSales,
 listSalesById,
 insertedSales,
 updatedSales,
};