"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Associates",
      [
        {
          name: "AA",
          email: "a@a",
          access_level: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BB",
          email: "b@b",
          access_level: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CC",
          email: "c@c",
          access_level: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "DD",
          email: "d@d",
          access_level: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "EE",
          email: "e@e",
          access_level: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Associates", null, {});
  },
};
