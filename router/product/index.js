const route = require("express").Router();
const ProductController = require("../../controllers/ProductController");

route.get("/", ProductController.showAll);
route.get("/add", ProductController.addForm);
route.post("/add", ProductController.add);
route.get("/:id/edit", ProductController.editForm);
route.post("/:id/edit", ProductController.edit);
route.get("/:id/delete", ProductController.delete);

module.exports = route;
