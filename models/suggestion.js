"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class suggestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      suggestion.hasMany(models.check, { foreignKey: "suggestionId" });
    }
  }
  suggestion.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "suggestion",
    }
  );
  return suggestion;
};
