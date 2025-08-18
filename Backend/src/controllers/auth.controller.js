const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerController = async (req, res) => {
  const {
    fullname: { firstName, lastName },
    email,
    username,
    password,
  } = req.body;
  const userAlreadyExsist = await userModel.findOne({ email });
  if (userAlreadyExsist) {
    res.status(401).json({
      message: "User Already Exsist",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    fullname: {
      firstName,
      lastName,
    },
    email,
    username,
    password: hashedPassword,
  });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token);
  res.status(201).json({
    message: "User Registed Successfully",
  });
};
const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    res.status(401).json({
      message: "User Not Exsist",
    });
  }
  const isPassword = await bcrypt.compare(password, user.password);
  if (!isPassword) {
    res.status(401).json({
      message: "Unauthorised User",
    });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token);
  res.status(201).json({
    message: "User Logged in Successfully",
  });
};
module.exports = {
  registerController,
  loginController,
};
