const salesModel = require('../models/SalesModel');

const listAllSales = async () => {
  const sales = await salesModel.listAllSales();
  return sales;
};

const listsalesById = async (id) => {
  const salesId = await salesModel.listSalesById(id);
  return salesId;
};

const createSales = async (sales) => {
  const saleId = await salesModel.createSales();
  await Promise.all(
    sales.map(({ quantity, productId }) =>
      salesModel.createSalesProducts(saleId, productId, quantity)),
  );
  return saleId;
};

const updateSales = async (id, sales) => {
  await Promise.all(
    sales.map(({ quantity, productId }) =>
      salesModel.updateSales(quantity, id, productId)),
  );
};

module.exports = {
  listAllSales,
  listsalesById,
  createSales,
  updateSales,
};
