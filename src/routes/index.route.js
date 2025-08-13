const express = require("express");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { userLogout } = require("../controllers/auth.controller");
const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
  res.render("index");
});
router.get("/logout", authMiddleware, userLogout);
module.exports = router;
