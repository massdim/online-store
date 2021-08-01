"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.belongsTo(models.Customer);
      Cart.belongsTo(models.Product);
    }
  }
  Cart.init(
    {
      CustomerId: DataTypes.INTEGER,
      ProductId: DataTypes.INTEGER,
      qty: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Qty cannot be empty!",
          },
          isInt: {
            message: "Qty must be integer!",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
