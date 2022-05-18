const salesModel = require('../models/SalesModel');

const listAllSales = async () => {
  const sales = await salesModel.listAllSales();
  return sales;
};

const listsalesById = async (id) => {
  const salesId = await salesModel.listSalesById(id);
  return salesId;
};

// const createSales = async (sales) => {
// const saleId = await salesModel.createSales()

// }

module.exports = {
  listAllSales,
  listsalesById,
};