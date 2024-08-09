'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      gender: {
        type: Sequelize.STRING,
        allowNull:false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      program: {
        type: Sequelize.STRING,
        allowNull:false
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
    await queryInterface.dropTable('Profiles');
  }
};