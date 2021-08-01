"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsToMany(models.Customer, { through: "models.Cart" });
      // Product.belongsToMany(models.Customer, { through: "models.Transaction" });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Product name cannot be empty!",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Description cannot be empty!",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Price cannot be empty!",
          },
          isInt: {
            message: "Price must be integer!",
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: {
            message: "Stock must be integer!",
          },
        },
      },
      category: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Category cannot be empty!",
          },
        },
      },
      brand: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
