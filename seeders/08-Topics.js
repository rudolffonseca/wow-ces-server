"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          title: "Info about a product",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Troubleshoot",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "IOS App",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Android App",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Other",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Topics", null, {});
  },
};
