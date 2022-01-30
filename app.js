const express = require("express");
const application = express();
const routes = require("./routes/product_route");

application.use(express.json());
application.use("/", routes);

module.exports = application;