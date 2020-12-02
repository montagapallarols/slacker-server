'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "listItems",
      [
        {
          listId: 1,
          itemId: 1,
          // rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listId: 1,
          itemId: 2,
          // rating: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listId: 4,
          itemId: 3,
          // rating: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listId: 4,
          itemId: 4,
          // rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listId: 1,
          itemId: 5,
          // rating: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("listItems", null, {});
  }
};
