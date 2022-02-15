const express = require("express");
const router = express.Router();
const {
  getCategories,
  getCategoryById,
  getProductsByCat,
} = require("../controllers/category.controller");

// @desc    Fetch all categories
// @route   GET /api/categories
// @access  Public
router.route("/").get(getCategories);

// @desc    Fetch category by id
// @route   GET /api/categories/:id
// @access  Public
router.route("/:id").get(getCategoryById);

// @desc    Fetch products by category
// @route   GET /api/categories/:id/products
// @access  Public
router.route("/:id/products").get(getProductsByCat);

module.exports = router;
