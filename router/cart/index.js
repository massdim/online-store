const route = require("express").Router();
const CartController = require("../../controllers/CartController");

// route.get("/", CartController.showAll);
route.get("/add", CartController.addForm);
route.post("/add", CartController.add);
route.get("/:id/delete", CartController.delete);

module.exports = route;
