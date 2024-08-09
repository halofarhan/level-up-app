'use strict';
const {
  Model
} = require('sequelize');

const { hash } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Profile, { foreignKey: "UserId" })
      this.hasMany(models.Nutrition, { foreignKey: "UserId" })
      this.hasMany(models.Order, { foreignKey: "UserId" })
      
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Email required"
        },
        notEmpty: {
          msg: "Email required"
        }
      },
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password required"
        },
        notEmpty: {
          msg: "Password required"
        }
      }
    },
    isMember: DataTypes.BOOLEAN,
    isProfile: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(function (instance, option) {
    instance.password = hash(instance.password)
  })

  return User;
};