const { Router } = require("express");

const DishesController = require("../controllers/DishesController");
const ensureAutheticated = require("../middlewares/ensureAuthenticated")

const dishesRoutes = Router();

const dishesController = new DishesController();

dishesRoutes.use(ensureAutheticated);

dishesRoutes.post("/", dishesController.create);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.get("/", dishesController.index);
dishesRoutes.put("/:id", dishesController.update);
dishesRoutes.delete("/:id", dishesController.delete);


module.exports = dishesRoutes;
