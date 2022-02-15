const asyncHandler = require("express-async-handler");
const productModel = require("../models/product.model");

const getProducts = asyncHandler(async (req, res) => {
  const products = await productModel.find({}).populate("category", "name");
  res.json(products);
});

const getOneProduct = asyncHandler(async (req, res) => {
  const product = await productModel
    .findById(req.params.id)
    .populate("category", "name");
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.json(product);
});

module.exports = { getProducts, getOneProduct };
