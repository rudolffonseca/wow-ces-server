"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Access_level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Access_level.belongsTo(models.Associate);
    }
  }
  Access_level.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Access_level",
    }
  );
  return Access_level;
};
