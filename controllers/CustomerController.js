const { Customer, Cart, Product, Transaction, Payment } = require("../models");

class CustomerController {
  static showAll(req, res) {
    Customer.findAll({
      order: [["id", "ASC"]],
    })
      .then((customers) => {
        res.render("customers/showAll.ejs", { customers });
      })
      .catch((err) => res.status(500).json(err));
  }

  static findOne(req, res) {
    const id = +req.params.id;

    Customer.findOne({
      where: { id },
    })
      .then((customer) => {
        if (customer) {
          res.render("customers/showOne.ejs", { customer });
        } else {
          throw {
            message: "Customer tidak ditemukan.",
          };
        }
      })
      .catch((err) => res.status(500).json(err));
  }

  static addForm(req, res) {
    res.render("customers/add.ejs");
  }

  static add(req, res) {
    const { fullName, email, address, phone } = req.body;

    Customer.create({ fullName, email, address, phone })
      .then(() => {
        // res.status(201).json({
        //  message: "Data customer berhasil ditambahkan"
        // })
        res.redirect("/customers");
      })
      .catch((err) => res.status(500).json(err));
  }

  static editForm(req, res) {
    const id = +req.params.id;

    Customer.findOne({
      where: { id },
    })
      .then((customer) => {
        if (customer) {
          res.render("customers/edit.ejs", { customer });
        } else {
          throw {
            status: 404,
            message: "id Customer tidak ditemukan",
          };
        }
      })
      .catch((err) => res.status(err.status || 500).json(err));
  }

  static update(req, res) {
    const id = +req.params.id;
    const { fullName, address, phone } = req.body;

    Customer.findOne({
      where: { id },
    })
      .then((customer) => {
        if (customer) {
          Customer.update(
            {
              fullName,
              address,
              phone,
            },
            {
              where: { id },
            }
          )
            .then(() => res.redirect(`/customers/${id}`))
            .catch((err) => res.status(500).json(err));
        } else {
          throw {
            status: 404,
            message: "id Customer tidak ditemukan",
          };
        }
      })
      .catch((err) => res.status(err.status || 500).json(err));
  }

  static showCarts(req, res) {
    const id = +req.params.id;

    Customer.findOne({
      where: { id },
    })
      .then((customer) => {
        if (customer) {
          Cart.findAll({
            include: [Product],
            where: { CustomerId: id },
            order: [["id", "ASC"]],
          })
            .then((carts) => {
              // res.json(carts);
              res.render("customers/cart/showAll.ejs", {
                carts,
                customerId: customer.id,
                customerName: customer.fullName,
              });
            })
            .catch((err) => res.status(500).json(err));
        } else {
          throw {
            status: 404,
            message: "id Customer tidak ditemukan",
          };
        }
      })
      .catch((err) => res.status(err.status || 500).json(err));
  }

  static showTransactions(req, res) {
    const id = +req.params.id;

    Customer.findOne({
      where: { id },
    })
      .then((customer) => {
        if (customer) {
          Transaction.findAll({
            where: { CustomerId: id },
            order: [["id", "ASC"]],
          })
            .then((transactions) => {
              // res.json(transactions);
              res.render("customers/transaction/showAll.ejs", {
                transactions,
                customerId: customer.id,
                customerName: customer.fullName,
              });
            })
            .catch((err) => res.status(500).json(err));
        } else {
          throw {
            status: 404,
            message: "id Customer tidak ditemukan",
          };
        }
      })
      .catch((err) => res.status(err.status || 500).json(err));
  }

  static paymentForm(req, res) {
    const { transactionId, customerId } = req.body;

    Payment.findOne({
      where: { TransactionId: transactionId },
    })
      .then((payment) =>
        res.render("customers/transaction/paymentConfirmationForm.ejs", {
          customerId,
          transactionId,
          payment: payment ? payment : { proof: "" },
        })
      )
      .catch((err) => res.status(500).json(err));
  }

  // // Update Proof Payment
  static payTransaction(req, res) {
    const { CustomerId, TransactionId, proof } = req.body;

    Payment.findOne({
      where: { TransactionId },
    })
      .then((data) => {
        if (data) {
          Payment.update(
            { proof },
            {
              where: { id: data.id },
            }
          )
            .then(() =>
              res.redirect(`/customers/${CustomerId}/show-transactions`)
            )
            .catch((err) => res.status(500).json(err));
        } else {
          Payment.create({
            TransactionId,
            proof,
          })
            .then((payment) => {
              Transaction.update(
                { status: "paid" },
                {
                  where: { id: TransactionId },
                }
              )
                .then(() =>
                  res.redirect(`/customers/${CustomerId}/show-transactions`)
                )
                .catch((err) => res.status(500).json(err));
            })
            .catch((errors) =>
              res.render("error/validation.ejs", {
                errors: errors.errors,
                route: `/customers/${CustomerId}/show-transactions`,
              })
            );
        }
      })
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = CustomerController;
