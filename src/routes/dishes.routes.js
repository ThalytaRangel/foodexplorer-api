const { Router } = require("express");

const DishesController = require("../controllers/DishesController");
const DishImageController = require("../controllers/DishImageController");
const ensureAutheticated = require("../middlewares/ensureAuthenticated");
const multer = require("multer");
const uploadsConfig = require("../configs/upload")

const dishesRoutes = Router();

const dishesController = new DishesController();
const dishImageController = new DishImageController();

const upload = multer(uploadsConfig.MULTER);

dishesRoutes.use(ensureAutheticated);

dishesRoutes.post("/", dishesController.create);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.get("/", dishesController.index);
dishesRoutes.put("/:id", dishesController.update);
dishesRoutes.patch("/:id/image", upload.single("image"), dishImageController.update);
dishesRoutes.delete("/:id", dishesController.delete);


module.exports = dishesRoutes;
