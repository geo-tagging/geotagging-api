const express = require("express");
const controllerTag = require("../controller/tanaman.js");
const upload = require("../middleware/multer.js");
const routes = express.Router();

routes.post("/", controllerTag.createNewTag);

routes.post("/", upload.single("photo"), controllerTag.createNewTag);

routes.get("/:orderBy/:sort", controllerTag.getAllTag);

routes.get("/:plant_id", controllerTag.getTagById);

routes.get("/search/:keyword/:orderBy/:sort", controllerTag.searchTag);

routes.patch("/:plant_id", controllerTag.updateTag);

routes.delete("/:plant_id", controllerTag.deleteTag);

module.exports = routes;
