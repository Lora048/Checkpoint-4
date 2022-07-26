const jwt = require("jsonwebtoken");
require("dotenv").config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

function signAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign({ payload }, accessTokenSecret, {}, (err, token) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      resolve(token);
    });
  });
}

function expirationToken() {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { expiration: "Ce token dure une heure" },
      accessTokenSecret,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        resolve(token);
      }
    );
  });
}

function verifyAccessToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, accessTokenSecret, (err, payload) => {
      if (err) {
        const message =
          err.name === "JsonWebTokenError" ? "Unauthorized" : err.message; // to be customized
        reject(message);
      }
      resolve(payload);
    });
  });
}

module.exports = { signAccessToken, expirationToken, verifyAccessToken };
