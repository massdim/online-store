const route = require("express").Router();
const TransactionController = require("../../controllers/TransactionController");

route.get("/", TransactionController.showAll);
route.post("/add", TransactionController.add);
route.get(
  "/:id/payment-confirmation/accepted",
  TransactionController.updateStatusPayment
);
route.get(
  "/:id/payment-confirmation/cancelled",
  TransactionController.updateStatusPayment
);
route.get("/:id", TransactionController.findOne);
route.get("/status/:status", TransactionController.showByStatus);

module.exports = route;
