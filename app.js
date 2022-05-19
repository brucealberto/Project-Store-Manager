const express = require('express');
const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');
const { validateSalesId } = require('./middlewares/validateSalesId');
const { validateProduct } = require('./schemas/schemasJoi');
const validateJoi = require('./middlewares/validateJoi');
const { middlewareSalesJoi } = require('./middlewares/validateSalesJoi');
const { middlewareProductsJoi } = require('./middlewares/validateProductsJoi');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
// Products
app.get('/products', productsController.listAllProducts);
app.get('/products/:id', productsController.listProductsById);
app.post(
  '/products',
  validateJoi(validateProduct),
  middlewareProductsJoi,
  productsController.insertProducts,
);
app.put('/products/:id', validateJoi(validateProduct), productsController.updatedProducts);
app.delete('/products/:id', productsController.deleteProducts);
app.get('/sales', salesController.listAllSales);
app.get('/sales/:id', validateSalesId, salesController.listSalesById);
app.post('/sales', middlewareSalesJoi, salesController.insertedSales);
app.put('/sales/:id', middlewareSalesJoi, salesController.updatedProducts);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;
