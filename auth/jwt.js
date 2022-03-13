const jwt = require("jsonwebtoken");
const jwtSecret = require("./secret").jwtSecret;

const toJWT = (data) => {
  return jwt.sign(data, jwtSecret);
};

const toData = (token) => {
  return jwt.verify(token, jwtSecret);
};

module.exports = { toJWT, toData };
