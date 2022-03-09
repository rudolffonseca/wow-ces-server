"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Message.belongsTo(models.Ticket, { foreignKey: "ticket_id" });
    }
  }
  Message.init(
    {
      message: DataTypes.TEXT,
      read: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
