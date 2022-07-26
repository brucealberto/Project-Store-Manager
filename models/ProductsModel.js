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

const insertProducts = async (name, quantity) => {
  const query = 'INSERT INTO products (name, quantity) VALUES (?, ?)';
  const [result] = await connection.execute(query, [name, quantity]);
  console.log('PRODUCTS MODEL =>', result);
  const insert = {
    id: result.insertId,
    name,
    quantity,
  };
  return insert;
};

const findName = async (name) => {
  const query = 'SELECT * FROM products WHERE name = ?';
  const [findByName] = await connection.execute(query, [name]);
  return findByName;
};

const updateProduct = async (name, quantity, id) => {
  const query = 'UPDATE products SET name = ?, quantity = ? WHERE id = ?';
  const [result] = await connection.execute(query, [name, quantity, id]);
  return result;
};

const deleteProduct = async (id) => {
  const query = 'DELETE FROM products WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  return result;
}; 
// pera , nao vai ser leo id? a deleção?
module.exports = {
  listAllProducts,
  listProductsById,
  insertProducts,
  findName,
  updateProduct,
  deleteProduct,
};