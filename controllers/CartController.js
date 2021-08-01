const { Cart, Customer, Product } = require("../models");

class CartController {
  static showAll(req, res) {
    Cart.findAll({
      include: [Customer, Product],
      order: [["id", "ASC"]],
    })
      .then((carts) => res.render("carts/showAll.ejs", { carts }))
      .catch((err) => res.status(500).json(err));
  }

  static async addForm(req, res) {
    const customers = await Customer.findAll({ order: [["id", "ASC"]] });
    const products = await Product.findAll({ order: [["id", "ASC"]] });

    res.render("carts/add.ejs", { customers, products });
  }

  static async add(req, res) {
    const { CustomerId, ProductId, qty } = req.body;

    const product = await Product.findOne({
      where: { id: ProductId },
    });

    const total = product.price * qty;

    Cart.findOne({
      where: {
        CustomerId,
        ProductId,
      },
    })
      .then((cart) => {
        if (cart) {
          Cart.update(
            {
              qty: +qty + cart.qty,
              total: product.price * (qty + cart.qty),
            },
            {
              where: {
                id: cart.id,
              },
            }
          )
            .then(() => res.redirect(`/customers/${CustomerId}/show-cart`))
            .catch((err) => res.status(500).json(err));
        } else {
          Cart.create({
            CustomerId,
            ProductId,
            qty,
            total,
          })
            .then(() => res.redirect(`/customers/${CustomerId}/show-cart`))
            .catch((err) => res.status(500).json(err));
        }
      })
      .catch((err) => res.status(500).json(err));
  }

  static delete(req, res) {
    const id = +req.params.id;

    Cart.findOne({
      where: { id },
    })
      .then((cart) => {
        Cart.destroy({
          where: { id },
        })
          .then(() => res.redirect(`/customers/${cart.CustomerId}/show-cart`))
          .catch((err) => res.status(500).json(err));
      })
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = CartController;
