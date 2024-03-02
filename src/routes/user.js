const express = require("express");
const controllerUser = require("../controller/user.js");
const routes = express.Router();

routes.post("/", controllerUser.createNewUser);

routes.get("/", controllerUser.getUser);

routes.get("/:plant_id", controllerUser.updateUser);

routes.patch("/:plant_id", controllerUser.deleteUser);

module.exports = routes;
