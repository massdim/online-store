const customerRouter = require("./customer");
const cartRouter = require("./cart");
const productRouter = require("./product");
const transactionRouter = require("./transaction");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.use("/customers", customerRouter);
router.use("/carts", cartRouter);
router.use("/products", productRouter);
router.use("/transactions", transactionRouter);

module.exports = router;
