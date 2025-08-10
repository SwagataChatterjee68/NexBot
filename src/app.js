require("dotenv").config();
const express = require("express");
const indexRoutes = require("./routes/index.route");
const cookieParser = require("cookie-parser");
const app = express();
const authRoutes = require("./routes/auth.route");


app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", indexRoutes);
app.use("/",authRoutes);

module.exports = app;
