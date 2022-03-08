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
      Ticket.hasOne(models.Customer, { foreignKey: "customer_id" });
      Ticket.hasOne(models.Product, { foreignKey: "product_id" });
      Ticket.hasOne(models.Topic, { foreignKey: "topic_id" });
      Ticket.hasOne(models.Associate, { foreignKey: "associate_id" });
      Ticket.hasOne(models.Status, { foreignKey: "status_id" });
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
