const { Product, Cart } = require("../models");

class ProductController {
  static showAll(req, res) {
    Product.findAll({
      order: [["id", "ASC"]],
    })
      .then((products) => {
        // res.json(products);
        res.render("products/showAll.ejs", { products });
      })
      .catch((err) => res.status(500).json(err));
  }

  static addForm(req, res) {
    res.render("products/add.ejs");
  }

  static add(req, res) {
    const { name, description, price, stock, category, brand, image } =
      req.body;

    Product.create({
      name,
      description,
      price,
      stock,
      category,
      brand,
      image,
    })
      .then(() => {
        res.redirect("/products");
      })
      .catch((err) => res.status(500).json(err));
  }

  static editForm(req, res) {
    const id = +req.params.id;
    Product.findOne({
      where: { id },
    })
      .then((product) => {
        if (product) {
          res.render("products/edit.ejs", { product });
        } else {
          throw {
            message: "Data tidak ditemukan.",
          };
        }
      })
      .catch((err) => res.status(500).json(err));
  }

  static edit(req, res) {
    const id = +req.params.id;
    Product.update(req.body, {
      where: { id },
    })
      .then(() => res.redirect("/products"))
      .catch((err) => res.status(500).json(err));
  }

  static delete(req, res) {
    const id = +req.params.id;
    Product.destroy({
      where: { id },
    })
      .then(() => {
        Cart.destroy({
          where: { ProductId: id },
        })
          .then(() => res.redirect("/products"))
          .catch((err) => res.status(500).json(err));
      })
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = ProductController;
