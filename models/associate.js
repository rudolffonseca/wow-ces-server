"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Associate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Associate.hasOne(models.Access_level, { foreignKey: "access_level" });
      Associate.belongsTo(models.Ticket, { foreignKey: "associate_id" });
    }
  }
  Associate.init(
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Associate",
    }
  );
  return Associate;
};
