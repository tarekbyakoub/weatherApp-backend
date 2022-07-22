"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "checks",
      [
        {
          checkProperty: "feelslikemin",
          checkType: "isHigherThan",
          checkValue: 25,
          suggestionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkProperty: "feelslikemin",
          checkType: "isLowerThan",
          checkValue: 20,
          suggestionId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkProperty: "precipprob",
          checkType: "isHigherThan",
          checkValue: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkProperty: "preciptype",
          checkType: "isEqualTo",
          checkValue: "rain, snow, hail",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkProperty: "uvindex",
          checkType: "isHigherThan",
          checkValue: 5,
          suggestionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkProperty: "uvindex",
          checkType: "isHigherThan",
          checkValue: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("checks", null, {});
  },
};
