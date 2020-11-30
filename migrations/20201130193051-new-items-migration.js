'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "items",
      "year",
      { type: Sequelize.STRING },
      {}
    );
    await queryInterface.addColumn(
      "items",
      "genre",
      { type: Sequelize.STRING },
      {}
    );
    await queryInterface.addColumn(
      "items",
      "director",
      { type: Sequelize.STRING },
      {}
    );
    await queryInterface.addColumn(
      "items",
      "plot",
      { type: Sequelize.TEXT },
      {}
    );
    await queryInterface.addColumn(
      "items",
      "poster",
      { type: Sequelize.TEXT },
      {}
    );
    await queryInterface.addColumn(
      "items",
      "type",
      { type: Sequelize.STRING },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("items", "year", {});
    await queryInterface.removeColumn("items", "genre", {});
    await queryInterface.removeColumn("items", "director", {});
    await queryInterface.removeColumn("items", "plot", {});
    await queryInterface.removeColumn("items", "poster", {});
    await queryInterface.removeColumn("items", "type", {});
  }
};
