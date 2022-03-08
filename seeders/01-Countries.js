"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Countries",
      [
        {
          code: "528",
          name: "Netherlands",
          region: "EMEA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: "344",
          name: "Hong Kong",
          region: "APAC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: "076",
          name: "Brazil",
          region: "AMER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: "840",
          name: "United States",
          region: "AMER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: "124",
          name: "Canada",
          region: "AMER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: "826",
          name: "United Kingdom",
          region: "AMER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Countries", null, {});
  },
};
