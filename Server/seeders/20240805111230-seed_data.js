'use strict';

const { hash } = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const users = require("../data/user.json");
    users.forEach((el) => {
      el.password = hash(el.password);
      el.updatedAt = el.createdAt = new Date();
    });

    
    const exercise = require("../data/exercise.json");
    exercise.forEach((el) => {
      el.updatedAt = el.createdAt = new Date();
    });
    
    const profiles = require("../data/profile.json");
    profiles.forEach((el) => {
      el.updatedAt = el.createdAt = new Date();
    });

    await queryInterface.bulkInsert("Users", users, {});
    await queryInterface.bulkInsert("Profiles", profiles, {});
    await queryInterface.bulkInsert("Exercises", exercise, {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete("Users", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });

    await queryInterface.bulkDelete("Exercises", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });

    await queryInterface.bulkDelete("Profiles", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  }

};
