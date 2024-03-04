const express = require("express");
const controllerOption = require("../controller/option.js");
const routes = express.Router();

routes.get("/", controllerOption.getAllOption);

module.exports = routes;
