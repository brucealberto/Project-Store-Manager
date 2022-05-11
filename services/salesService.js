const salesModel = require('../models/SalesModel');

const listAllSales = async () => {
  const sales = await salesModel.listAllSales();
  return sales;
};

const listsalesById = async (id) => {
  const salesId = await salesModel.listSalesById(id);
  return salesId;
};

module.exports = {
  listAllSales,
  listsalesById,
};