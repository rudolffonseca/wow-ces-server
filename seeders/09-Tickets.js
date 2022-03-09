"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tickets",
      [
        {
          customer_id: 1,
          product_id: 1,
          topic_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: 2,
          product_id: 2,
          topic_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: 2,
          product_id: 1,
          topic_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tickets", null, {});
  },
};
