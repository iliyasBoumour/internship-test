const express = require("express");
const router = express.Router();
const { getLoggedIn, updateUser } = require("../controllers/user.controller");

// @desc    logged in a user
// @route   get /api/users/current
// @access  Private

// @desc    update user info
// @route   get /api/users/:id
// @access  Private
router.route("/current").get(getLoggedIn).put(updateUser);

module.exports = router;
