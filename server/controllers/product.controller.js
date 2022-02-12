const asyncHandler = require("express-async-handler");
const products = require("../data/products");
// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = (req, res) => {
  res.json(products);
};

module.exports = { getProducts };
