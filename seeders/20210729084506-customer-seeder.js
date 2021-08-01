"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Customers",
      [
        {
          fullName: "Dimas Satria",
          email: "dimas@gmail.com",
          address: "Jl. Antena II Radio Dalam, Jakarta Selatan",
          phone: "0895392379068",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Wahyu Putra",
          email: "wahyu@gmail.com",
          address: "Jl. Sunan Giri, No.12, Tangerang",
          phone: "087883903685",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Syafiq",
          email: "syafiq@gmail.com",
          address: "Jl. Komplek Taman Gandaria, Jakarta Selatan",
          phone: "087822618012",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Customers", null, {});
  },
};
