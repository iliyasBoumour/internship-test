const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/auth.controller");

// @desc    logged in a yser
// @route   post /api/login
// @access  Public
router.route("/login").post(login);

// @desc    create a new user
// @route   GET /api/register
// @access  Public
router.route("/register").post(register);
module.exports = router;
