"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Customer);
    }
  }
  Transaction.init(
    {
      CustomerId: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate(transaction, options) {
          transaction.status = "unpaid";
        },
      },
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
