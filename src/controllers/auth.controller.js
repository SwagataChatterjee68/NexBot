const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const bcryptjs = require("bcryptjs");

const getRegsiterController = (req, res) => {
  res.render("register");
};

const postRegisterController = async (req, res) => {
  const { username, email, password } = req.body;
  const ifUserExsist = await userModel.findOne({ email } && { username });
  if (ifUserExsist) {
    return res.json({
      message: "User Alrady Exsist",
    });
  }
  const user = await userModel.create({
    email,
    username,
    password: await bcryptjs.hash(password, 10),
  });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  
  res.render("login");
};
const getLoginController = (req, res) => {
  res.render("login");
};
const postLoginController = async (req, res) => {
  const { identifier, password } = req.body;
  const user = await userModel.findOne(
    { $or: [{ username: identifier }, { email: identifier }] }
  );
  if (!user) {
    return res.json({
      message: "User Not Found",
    });
  }
  const isPpassword = await bcryptjs.compare(password, user.password);
  if (!isPpassword) {
    return res.json({
      message: "Invalid Password",
    });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token);
  res.render("index");
};
module.exports = {
  postLoginController,
  postRegisterController,
  getRegsiterController,
  getLoginController,
};
