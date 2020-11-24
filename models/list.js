'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      list.belongsTo(models.profile);
      list.hasMany(models.item);
    }
  };
  list.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'list',
  });
  return list;
};