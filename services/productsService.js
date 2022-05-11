const productsModel = require('../models/ProductsModel');

const handleError = (status, message) => ({ status, message });

const listAllProducts = async () => {
  const products = await productsModel.listAllProducts();
  return products;
};

const listProductsById = async (id) => {
  const productsId = await productsModel.listProductsById(id);
  
  if (productsId.length === 0) {
 throw handleError(404, 'Product not found');
}
  return productsId[0];
};

module.exports = {
  listAllProducts,
  listProductsById,
};