const express = require("express");
const controllerTag = require("../controller/tanaman.js");
const routes = express.Router();

routes.post("/", controllerTag.createNewTag);

routes.get("/", controllerTag.getAllTag);

routes.get("/:plant_id", controllerTag.getTagById);

routes.patch("/:plant_id", controllerTag.updateTag);

routes.delete("/:plant_id", controllerTag.deleteTag);

module.exports = routes;
