"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Statuses",
      [
        {
          title: "on queue",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "open",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "on hold",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "closed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Statuses", null, {});
  },
};
