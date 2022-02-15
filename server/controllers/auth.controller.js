const asyncHandler = require("express-async-handler");
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const signJwt = require("../utils/signJwt");

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("email and password are required");
  }
  const user = await userModel.findOne({ email });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = signJwt(user);
    res.header("Authorization", token).json({ token });
  } else {
    res.status(400);
    throw new Error("Bad credentials");
  }
});

const register = asyncHandler(async (req, res) => {
  let { email, password, name } = req.body;
  if (!email || !password || !name) {
    res.status(400);
    throw new Error("All fields are required");
  }
  let user = await userModel.findOne({ email });
  if (user) {
    res.status(400);
    throw new Error("User already exists");
  }
  password = bcrypt.hashSync(password, 10);
  user = await userModel.create({
    name,
    email,
    password,
  });
  res.status(201).json({ name: user.name, email: user.email });
});

module.exports = { login, register };
