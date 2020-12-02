'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          name: "Compelling",
          content: "Goddamn you Stanley Kubrick. For me Clockwork Orange set the standard a long time ago for cinematic perfection; Full Metal Jacket just raises the bar.",
          rating: 4,
          profileId: 1,
          itemId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("reviews", null, {});
  }
};
