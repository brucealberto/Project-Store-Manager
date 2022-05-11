const express = require('express');
const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');
const validateIdMiddleware = require('./middlewares/validateSalesId');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
// Products
app.get('/products', productsController.listAllProducts);
app.get('/products/:id', productsController.listProductsById);

// Sales
app.get('/sales', salesController.listAllSales);
app.get('/sales/:id', validateIdMiddleware.validateSalesId, salesController.listSalesById);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
