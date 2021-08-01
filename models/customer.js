"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.belongsToMany(models.Product, { through: "models.Cart" });
      Customer.hasMany(models.Transaction);
    }
  }
  Customer.init(
    {
      fullName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "FullName cannot be empty!",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            message: "Please enter a valid email address!",
          },
        },
      },
      address: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Address cannot be empty!",
          },
        },
      },
      phone: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Phone cannot be empty!",
          },
          isNumeric: {
            message: "Phone must be number!",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
