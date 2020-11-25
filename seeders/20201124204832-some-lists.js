'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "lists",
      [
        {
          type: "Favourites",
          profileId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Library",
          profileId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Wishlist",
          profileId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Favourites",
          profileId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Library",
          profileId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Wishlist",
          profileId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("lists", null, {});
  }
};
