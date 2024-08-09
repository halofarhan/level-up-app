'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      day: {
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue:1
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false
      },
      isMember: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
      },
      isProfile: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
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
    await queryInterface.dropTable('Users');
  }
};