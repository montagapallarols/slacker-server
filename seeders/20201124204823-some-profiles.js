'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "profiles",
      [
        {
          firstName: "Montaga",
          lastName: "Pallarols",
          imageUrl: "https://cdn.vox-cdn.com/thumbor/LW3mhemL4J6bXob-9a47xRjDyic=/0x0:700x566/1820x1213/filters:focal(294x227:406x339):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63199158/grand-budapest-review.0.0.1500867064.0.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Bas",
          lastName: "de Groene",
          imageUrl: "http://i2.cdn.turner.com/cnn/dam/assets/140922202605-08-pulp-fiction-horizontal-gallery.jpg",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("profiles", null, {});
  }
};
