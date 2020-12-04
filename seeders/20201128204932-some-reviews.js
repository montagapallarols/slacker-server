'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          name: "Compelling",
          content: "Goddamn you Stanley Kubrick. For me Clockwork Orange set the standard for cinematic perfection a long time ago; Full Metal Jacket just raises the bar.",
          rating: 4,
          profileId: 1,
          itemId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   name: '"Nothing happens"',
        //   content: "Yeah but the vibes. Love this film, brings me straight back to the 90s.",
        //   rating: 4,
        //   profileId: 1,
        //   itemId: 2,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   name: "Superb editing",
        //   content: "Style and substance blended is a beautiful thing.",
        //   rating: 5,
        //   profileId: 2,
        //   itemId: 8,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("reviews", null, {});
  }
};
