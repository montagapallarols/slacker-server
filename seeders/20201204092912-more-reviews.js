'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          name: "Compelling",
          content: "Goddamn you Stanley Kubrick. For me Clockwork Orange set the standard for cinematic perfection long ago; Full Metal Jacket just raises the bar.",
          profileId: 1,
          itemId: 1,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '"Nothing happens"',
          content: "Yeah but the vibes. Love this film, brings me straight back to the 90s.",
          profileId: 1,
          itemId: 2,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Superb editing",
          content: "Style and substance blended is a beautiful thing.",
          profileId: 2,
          itemId: 8,
          rating: 5,
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
