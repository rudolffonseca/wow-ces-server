"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Access_levels",
      [
        {
          title: "manager",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "associate",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "viewer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Access_levels", null, {});
  },
};
