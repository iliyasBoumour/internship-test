const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    role: "ROLE_ADMIN",
  },
  {
    name: "iliyas",
    email: "iliyas@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "ROLE_USER",
  },
  {
    name: "hadil",
    email: "hadil@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "ROLE_USER",
  },
];

module.exports = users;
