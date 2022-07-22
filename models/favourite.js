"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class favourite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      favourite.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  favourite.init(
    {
      resolvedAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      displayName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "favourite",
    }
  );
  return favourite;
};
