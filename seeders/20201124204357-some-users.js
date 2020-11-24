'use strict';
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "Montaga Pallarols",
          email: "montaga.pallarols@gmail.com",
          password: bcrypt.hashSync("mon", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Sal Paradise",
          email: "sal@paradise.com",
          password: bcrypt.hashSync("sal", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Ella Cassidy",
          email: "ella@cassidy.com",
          password: bcrypt.hashSync("ella", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  }
};
