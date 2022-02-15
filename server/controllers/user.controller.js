const asyncHandler = require("express-async-handler");
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const signJwt = require("../utils/signJwt");

const getLoggedIn = asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.user._id).select("name email role");
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.json(user);
});
const updateUser = asyncHandler(async (req, res) => {
  const { name, password, newpassword } = req.body;
  const user = await userModel.findById(req.user._id);
  if (user && bcrypt.compareSync(password, user.password)) {
    let pwd = user.password;
    if (newpassword) {
      pwd = bcrypt.hashSync(newpassword, 10);
    }
    let uname = user.name;
    if (name) {
      uname = name;
    }
    const newInfo = await userModel.findByIdAndUpdate(
      req.user._id,
      {
        $set: { name: uname, password: pwd },
      },
      { new: true }
    );
    const token = signJwt(newInfo);
    res.header("Authorization", token).json({ token });
  } else {
    res.status(400);
    throw new Error("Bad credentials");
  }
});

module.exports = { getLoggedIn, updateUser };
