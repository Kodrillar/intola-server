const jwt  = require("jsonwebtoken");
const env = require("../environment/env");

module.exports.jsonwebtoken = function(email, fullname) {
   return jwt.sign({email, fullname}, env.JWT_KEY);
}