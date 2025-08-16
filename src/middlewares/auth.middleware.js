const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    res.status(401).json({
      message: "Unauthorised User",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Something Went Wrong",
    });
  }
};
module.exports = { authMiddleware };
