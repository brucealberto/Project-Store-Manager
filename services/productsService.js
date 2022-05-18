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

const insertProducts = async (name, quantity) => {
  const find = await productsModel.findName(name);
  if (find.length > 0) {
    throw handleError(409, 'Product already exists');
  }
  const insertedProduct = await productsModel.insertProducts(name, quantity);
  return insertedProduct;
};

const updateProducts = async (id, name, quantity) => {
  const products = await productsModel.listProductsById(id);
  if (products.length === 0) {
    throw handleError(404, 'Product not found');
  }
  const update = await productsModel.updateProduct(name, quantity, id); // 
  return update;
};

const deleteProducts = async (id) => {
  const products = await productsModel.listProductsById(id);
  if (products.length === 0) {
    throw handleError(404, 'Product not found');
  }
  await productsModel.deleteProduct(id);
};

module.exports = {
  listAllProducts,
  listProductsById,
  insertProducts,
  updateProducts,
  deleteProducts,
};