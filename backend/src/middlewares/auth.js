require("dotenv").config();

const { verifyAccessToken } = require("../helpers/jwtHelper");

const authorization = async (req, res, next) => {
  const authToken = req.cookies.userToken;

  if (!authToken) {
    return res.sendStatus(401);
  }

  try {
    const data = await verifyAccessToken(authToken);
    if (data) {
      return next();
    }
  } catch (e) {
    console.error(e);
    return res.sendStatus(401);
  }
  return null;
};

const sessionControl = async (req, res) => {
  const authToken = req.cookies.userToken;
  if (!authToken) {
    res.status(401).json({
      sessionExpired: true,
    });
  }
  try {
    const data = await verifyAccessToken(authToken);
    if (!data) {
      res.status(401).json({
        sessionExpired: true,
      });
    }
    res.status(200).json({
      sessionExpired: false,
      userId: data.payload.user.id,
      firstname: data.payload.user.firstname,
      lastname: data.payload.user.lastname,
    });
  } catch (e) {
    console.warn(e);
  }
};

module.exports = {
  authorization,
  sessionControl,
};
