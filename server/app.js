const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const routes = require("./routes/index");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(logger("dev"));

app.use("/api", routes);

module.exports = app;
