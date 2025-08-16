require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/auth.route");
const chatRoutes = require("./routes/chat.routes");
const cookieParser = require("cookie-parser");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/chat", chatRoutes);

module.exports = app;
