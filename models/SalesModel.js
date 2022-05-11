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

module.exports = {
  listAllSales,
  listSalesById,
};
