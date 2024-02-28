const express = require("express");
const controllerTag = require("../controller/tanaman.js");
const routes = express.Router();

routes.get("/", controllerTag.getAllTag);

routes.post("/", controllerTag.createNewTag);

routes.patch("/:plant_id", controllerTag.updateTag);

module.exports = routes;
