"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("checks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      checkProperty: {
        type: Sequelize.STRING,
      },
      checkType: {
        type: Sequelize.STRING,
      },
      checkValue: {
        type: Sequelize.STRING || Sequelize.FLOAT,
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
    await queryInterface.dropTable("checks");
  },
};
