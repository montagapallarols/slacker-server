'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      profile.belongsTo(models.user);
      profile.hasMany(models.list);
      profile.hasMany(models.review);
    }
  };
  profile.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    imageUrl: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'profile',
  });
  return profile;
};