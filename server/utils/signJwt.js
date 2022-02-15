const jwt = require("jsonwebtoken");

const signJwt = (user) => {
  const { _id, name, email, role } = user;
  let token = jwt.sign({ _id, name, email, role }, process.env.JWT_TOKEN, {
    expiresIn: "1d",
  });
  token = "Bearer " + token;
  return token;
};
module.exports = signJwt;
