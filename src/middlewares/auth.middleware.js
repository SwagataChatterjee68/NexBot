const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.cookie;
  if (!token) {
    res.redirect("/login");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user=await userModel.findOne(decoded.id);
    req.user = user;
    next();
  } catch (error) {
    res.redirect("/login");
  }
};
module.exports = { authMiddleware };
