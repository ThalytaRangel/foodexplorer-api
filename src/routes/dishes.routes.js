const { Router } = require("express");

const DishesController = require("../controllers/DishesController");
const DishImageController = require("../controllers/DishImageController");
const ensureAutheticated = require("../middlewares/ensureAuthenticated");
const ensureAdmin = require("../middlewares/ensureAdmin");
const multer = require("multer");
const uploadsConfig = require("../configs/upload")

const dishesRoutes = Router();

const dishesController = new DishesController();
const dishImageController = new DishImageController();

const upload = multer(uploadsConfig.MULTER);

dishesRoutes.use(ensureAutheticated);

dishesRoutes.post("/", ensureAdmin, dishesController.create);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.get("/", dishesController.index);
dishesRoutes.put("/:id", ensureAdmin, dishesController.update);
dishesRoutes.patch("/:id/image", ensureAdmin, upload.single("image"), dishImageController.update);
dishesRoutes.delete("/:id", ensureAdmin, dishesController.delete);


module.exports = dishesRoutes;
