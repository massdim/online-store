"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Payments",
      [
        {
          TransactionId: 2,
          proof: "https://via.placeholder.com/150",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TransactionId: 3,
          proof: "https://via.placeholder.com/150",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Payments", null, {});
  },
};
