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
      review.belongsTo(models.profile, {
        constraints: false,
      });
      review.belongsTo(models.item, {
        constraints: false,
      });
    }
  };
  review.init({
    name: DataTypes.STRING,
    content: { type: DataTypes.TEXT, allowNull: false },
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};