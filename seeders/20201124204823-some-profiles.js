'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "profiles",
      [
        {
          fullName: "Montaga Pallarols",
          imageUrl: "https://i.picsum.photos/id/128/200/200.jpg?hmac=m4AGhjLVIqDjy9qPNhbZyp8Gm_K03UAgP3IZnItJMA4",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Jane Doe",
          imageUrl: "https://i.picsum.photos/id/565/200/200.jpg?hmac=QvKo8qgzFFNcZoXCpT0CNMDTwWd3ynwqLXxrzK2o8fw",
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
