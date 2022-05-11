const connection = require('./connection');

const listAllProducts = async () => {
  const query = 'SELECT * FROM products';
  const [result] = await connection.execute(query);
  return result;
};

const listProductsById = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  listAllProducts,
  listProductsById,
};