'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class listItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      listItem.belongsTo(models.list);
      listItem.belongsTo(models.item);
    }
  };
  listItem.init({
    listId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'listItem',
  });
  return listItem;
};