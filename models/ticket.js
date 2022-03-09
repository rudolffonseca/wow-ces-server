"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.Customer, { foreignKey: "customer_id" });
      Ticket.belongsTo(models.Product, { foreignKey: "product_id" });
      Ticket.belongsTo(models.Topic, { foreignKey: "topic_id" });
      Ticket.belongsTo(models.Associate, { foreignKey: "associate_id" });
      Ticket.belongsTo(models.Status, { foreignKey: "status_id" });
      Ticket.hasMany(models.Message, { foreignKey: "ticket_id" });
    }
  }
  Ticket.init(
    {
      closedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );
  return Ticket;
};
