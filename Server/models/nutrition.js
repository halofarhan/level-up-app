'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nutrition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "UserId" })
    }
  }
  Nutrition.init({
    UserId: DataTypes.INTEGER,
    day: DataTypes.INTEGER,
    calorie: DataTypes.INTEGER,
    protein: DataTypes.INTEGER,
    calorieNeeds: DataTypes.INTEGER,
    proteinNeeds: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Nutrition',
  });
  return Nutrition;
};