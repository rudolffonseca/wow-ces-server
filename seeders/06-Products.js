"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "ABC",
          serial: "1A2B",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "EFG",
          serial: "1G5H",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TTT",
          serial: "J544",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "WWW",
          serial: "1A00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
