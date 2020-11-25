'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "lists",
      [
        {
          type: "Montaga's Favourites",
          profileId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Montaga's Library",
          profileId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Montaga's Wishlist",
          profileId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Jane's Favourites",
          profileId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Jane's Library",
          profileId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Jane's Wishlist",
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
