'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "reviews",
      "rating",
      { type: Sequelize.INTEGER },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("reviews", "rating", {});
  }
};
