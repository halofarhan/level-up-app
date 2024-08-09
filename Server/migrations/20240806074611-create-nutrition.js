'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Nutrition', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      day: {
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue:1
      },
      calorie: {
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue:0
      },
      protein: {
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue:0
      },
      proteinNeeds: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      calorieNeeds: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Nutrition');
  }
};