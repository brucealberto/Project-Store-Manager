const productsService = require('../services/productsService');

const listAllProducts = async (req, res, _next) => {
  try {
    const products = await productsService.listAllProducts();
    return res.status(200).json(products);
  } catch (error) {
  console.log(' productsController.js ~ listAllProducts', error); 
  }
};

const listProductsById = async (req, res, _next) => {
  try {
    const { id } = req.params;
    const productsId = await productsService.listProductsById(id);
    return res.status(200).json(productsId);
  } catch (error) {
  console.log('productsController.js ~listProductsById', error);
    return res.status(404).json({ message: error.message });
  }
};

const insertProducts = async (req, res, _next) => {
  try {
    const { name, quantity } = req.body;
    const insertedProduct = await productsService.insertProducts(name, quantity);
    return res.status(201).json(insertedProduct);
  } catch (error) {
  console.log('productsController.js ~ insertProducts', error.message);
    return res.status(409).json(error);
  }
};

const updatedProducts = async (req, res, _next) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    await productsService.updateProducts(id, name, quantity);
    return res.status(200).json({ id, name, quantity });
  } catch (error) {
    return res.status(404).json(error);
  }
};

const deleteProducts = async (req, res, _next) => {
  try {
    const { id } = req.params;
    await productsService.deleteProducts(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  listAllProducts,
  listProductsById,
  insertProducts,
  updatedProducts,
  deleteProducts,
};