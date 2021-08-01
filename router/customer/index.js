const route = require("express").Router();
const CustomerController = require("../../controllers/CustomerController");

route.get("/", CustomerController.showAll);
route.get("/add", CustomerController.addForm);
route.post("/add", CustomerController.add);
route.get("/:id/edit", CustomerController.editForm);
route.post("/:id/update", CustomerController.update);
route.get("/:id/show-cart", CustomerController.showCarts);
route.get("/:id/show-transactions", CustomerController.showTransactions);
route.post("/:id/payment-confirmation-form", CustomerController.paymentForm);
route.post("/:id/pay-transaction", CustomerController.payTransaction);
route.get("/:id", CustomerController.findOne);

module.exports = route;
