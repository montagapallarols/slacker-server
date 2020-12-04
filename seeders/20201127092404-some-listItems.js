'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "listItems",
      [
        {
          listId: 1,
          itemId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listId: 1,
          itemId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listId: 4,
          itemId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listId: 4,
          itemId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listId: 1,
          itemId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listId: 1,
          itemId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listId: 4,
          itemId: 8,
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
