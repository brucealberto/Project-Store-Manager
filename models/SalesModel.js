const connection = require('./connection');

const listAllSales = async () => {
  const query = `SELECT s.id, s.date, sp.sale_id AS saleId, sp.product_id AS productId,
  sp.quantity AS quantity
  FROM sales AS s 
  INNER JOIN sales_products AS sp
  ON s.id = sp.sale_id`;
  const [result] = await connection.execute(query);
  return result;
};

const listSalesById = async (id) => {
  const query = `SELECT s.date AS date, sp.product_id AS productId,
  sp.quantity AS quantity
  FROM sales AS s 
  JOIN sales_products AS sp
  ON s.id = sp.sale_id
  WHERE s.id = ?`;
  const [result] = await connection.execute(query, [id]);
  console.log('model ', result);
  return result;
};
const createSales = async () => {
  const query = 'INSERT INTO sales (date) VALUES(now())';
  const [result] = await connection.execute(query);
  return result.insertId;
};

const createSalesProducts = async (saleId, productId, quantity) => { 
  const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES(?, ?, ?)';
  const [result] = await connection.execute(query, [saleId, productId, quantity]);
  return result;
};

const updateSales = async (quantity, saleId, productId) => {
  const query = 'UPDATE sales_products SET quantity = ? WHERE sale_id = ? AND product_id = ? ';
  const [result] = await connection.execute(query, [quantity, saleId, productId]);
  return result;
};

module.exports = {
  listAllSales,
  listSalesById,
  createSales,
  createSalesProducts,
  updateSales,
};
