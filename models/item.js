'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      item.belongsToMany(models.list, {
        through: "listItems",
        foreignKey: "itemId",
      });
      item.belongsTo(models.category);
      item.hasMany(models.review, {
        constraints: false,
      });
    }
  };
  item.init({
    name: DataTypes.STRING,
    year: DataTypes.STRING,
    genre: DataTypes.STRING,
    director: DataTypes.STRING,
    plot: DataTypes.TEXT,
    poster: DataTypes.TEXT,
    type: DataTypes.STRING,
    apiId: DataTypes.STRING,
    apiName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'item',
  });
  return item;
};