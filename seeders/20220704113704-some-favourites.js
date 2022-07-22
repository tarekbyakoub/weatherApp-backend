"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "favourites",
      [
        {
          resolvedAddress: "Amsterdam, Noord-Holland, Nederland",
          displayName: "Amsterdam",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resolvedAddress: "Cape Town, Western Cape, South Africa",
          displayName: "Cape Town",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          resolvedAddress: "Tokyo, Japan",
          displayName: "Tokyo",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("favourites", null, {});
  },
};
