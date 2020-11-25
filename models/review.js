'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      review.belongsTo(models.profile);
      review.belongsTo(models.item);
    }
  };
  review.init({
    name: DataTypes.STRING,
    content: { type: DataTypes.TEXT, allowNull: false }
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};