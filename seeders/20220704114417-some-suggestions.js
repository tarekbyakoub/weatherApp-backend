"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("suggestions", [
      {
        name: "Don't forget to put on sunscreen",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Take an umbrella with you",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wear something short",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Make sure to bring a jacket",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("suggestions", null, {});
  },
};
