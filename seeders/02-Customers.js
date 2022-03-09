"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Customers",
      [
        {
          name: "Mary Jane",
          email: "mj@mj",
          country_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Doe",
          email: "jd@jd",
          country_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thelma Carter",
          email: "tc@tc",
          country_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Carl Sagan",
          email: "cs@cs",
          country_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cora Coralina",
          email: "cc@cc",
          country_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Carlos Magno",
          email: "cm@cm",
          country_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maria Bonita",
          email: "mb@mb",
          country_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jack Jane",
          email: "jj@jj",
          country_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tony Montana",
          email: "tm@tm",
          country_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Customers", null, {});
  },
};
