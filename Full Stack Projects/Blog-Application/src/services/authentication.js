require('dotenv').config()
const JWT = require('jsonwebtoken'); 
const secret = process.env.TOKEN_SECRET;

function createTokenForUser(user) {
  const payLoad = {
    _id: user._id,
    email: user.email,
    profileImageUrl: user.profileImageUrl,
    role: user.role,
  };
  const token = JWT.sign(payLoad,secret); // this is the token
  return token;
}

function validateToken(token) {
  const payLoad = JWT.verify(token, secret); 
  return payLoad; 
}

module.exports = { createTokenForUser, validateToken };
