"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class check extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      check.belongsTo(models.suggestion, { foreignKey: "suggestionId" });
    }
  }
  check.init(
    {
      checkProperty: DataTypes.STRING,
      checkType: DataTypes.STRING,
      checkValue: DataTypes.STRING || DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "check",
    }
  );
  return check;
};
