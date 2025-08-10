const express = require("express");
const {
  getLoginController,
  getRegsiterController,
  postLoginController,
  postRegisterController,
} = require("../controllers/auth.controller");

const router = express.Router();

router.route("/register")
  .get(getRegsiterController)
  .post(postRegisterController);
router.route("/login")
    .get(getLoginController)
    .post(postLoginController);

module.exports = router;
