const asyncHandler = require("express-async-handler");
const productModel = require("../models/product.model");
const categoryModel = require("../models/category.model");

const getCategories = asyncHandler(async (req, res) => {
  const categories = await categoryModel.find({});
  res.json(categories);
});

const getCategoryById = asyncHandler(async (req, res) => {
  const category = await categoryModel.findById(req.params.id);
  if (!category) {
    res.status(404);
    throw new Error("Category not found");
  }
  res.json(category);
});

const getProductsByCat = asyncHandler(async (req, res) => {
  const catId = req.params.id;
  const products = await productModel.find({ category: catId });
  res.json(products);
});

module.exports = { getCategories, getCategoryById, getProductsByCat };
