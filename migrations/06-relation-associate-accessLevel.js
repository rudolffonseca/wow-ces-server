"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Associates", "access_level", {
      type: Sequelize.INTEGER,
      references: {
        model: "Access_levels",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Associates", "access_level");
  },
};
