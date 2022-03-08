"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tickets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Customers",
          key: "id",
        },
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
      },
      topic_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Topics",
          key: "id",
        },
        allowNull: false,
      },
      associate_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Associates",
          key: "id",
        },
      },
      status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Statuses",
          key: "id",
        },
        allowNull: false,
        defaultValue: 1,
      },
      closedAt: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tickets");
  },
};
