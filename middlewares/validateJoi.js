module.exports = (schemas) => (req, res, next) => {
  const { error } = schemas.validate(req.body);
  console.log(req.body);
  if (error) {
  const statusCode = error.message.includes('required') ? 400 : 422;
    res.status(statusCode).json({ message: error.message });
  } 
  next();
};