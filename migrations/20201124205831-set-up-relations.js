'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("profiles", "userId", {
      type: Sequelize.INTEGER,
      references: {
      model: "profiles",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
    });
    await queryInterface.addColumn("lists", "profileId", {
      type: Sequelize.INTEGER,
      references: {
      model: "lists",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
    });
    await queryInterface.addColumn("items", "categoryId", {
      type: Sequelize.INTEGER,
      references: {
      model: "items",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
    });
    await queryInterface.addColumn("reviews", "profileId", {
      type: Sequelize.INTEGER,
      references: {
      model: "profiles",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
    });
    await queryInterface.addColumn("reviews", "itemId", {
      type: Sequelize.INTEGER,
      references: {
      model: "items",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("profiles", "userId");
    await queryInterface.removeColumn("lists", "profileId");
    await queryInterface.removeColumn("items", "categoryId");
    await queryInterface.removeColumn("reviews", "profileId");
    await queryInterface.removeColumn("reviews", "itemId");
  }
};
