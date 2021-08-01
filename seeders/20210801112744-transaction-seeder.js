"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Transactions",
      [
        {
          CustomerId: 1,
          total: 12000000,
          status: "unpaid",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CustomerId: 1,
          total: 8000000,
          status: "paid",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CustomerId: 2,
          total: 5000000,
          status: "accepted",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Transactions", null, {});
  },
};
