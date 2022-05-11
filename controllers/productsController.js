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

module.exports = {
  listAllProducts,
  listProductsById,
};