const { Transaction, Customer, Cart, Product, Payment } = require("../models");

class TransactionController {
  static showAll(req, res) {
    Transaction.findAll({
      include: [Customer],
      order: [["id", "ASC"]],
    })
      .then((transactions) =>
        // res.json(transactions)
        res.render("transactions/showAll.ejs", {
          transactions,
          status: null,
        })
      )
      .catch((err) => res.status(500).json(err));
  }

  static findOne(req, res) {
    const id = +req.params.id;
    Transaction.findOne({
      include: [Customer],
      where: { id },
    })
      .then((transaction) =>
        Payment.findOne({
          where: { TransactionId: id },
        })
          .then((payment) =>
            res.render("transactions/showOne.ejs", { transaction, payment })
          )
          .catch((err) => res.status(500).json(err))
      )
      .catch((err) => res.status(500).json(err));
  }

  static showByStatus(req, res) {
    const status = req.params.status;
    Transaction.findAll({
      include: [Customer],
      where: {
        status,
      },
      order: [["id", "ASC"]],
    })
      .then((transactions) =>
        res.render("transactions/showAll.ejs", { transactions, status })
      )
      .catch((err) => res.status(500).json(err));
  }

  static async add(req, res) {
    const { CustomerId } = req.body;

    let total = 0;

    const carts = await Cart.findAll({
      include: [Product],
      where: { CustomerId },
    });

    carts.forEach((cart) => {
      let subTotal = cart.qty * cart.Product.price;
      total = total + subTotal;
    });

    Transaction.create({
      CustomerId,
      total,
    })
      .then(() => res.redirect(`/customers/${CustomerId}/show-transactions`))
      .catch((err) => res.status(500).json(err));
  }

  static updateStatusPayment(req, res) {
    const id = +req.params.id;

    const urlSegment = req.originalUrl.split("/");
    const status = urlSegment[urlSegment.length - 1];

    if (status === "accepted" || status === "cancelled") {
      Transaction.update(
        {
          status,
        },
        {
          where: {
            id,
          },
        }
      )
        .then(() => res.redirect("/transactions"))
        .catch((err) => res.status(500).json(err));
    }
  }
}

module.exports = TransactionController;
