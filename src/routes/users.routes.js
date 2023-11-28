const { Router } = require("express");

const UsersController = require("../controllers/UsersController");
const ensureAutheticated = require("../middlewares/ensureAuthenticated")


const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAutheticated, usersController.update);

module.exports = usersRoutes;
