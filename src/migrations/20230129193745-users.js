'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER 
      },

      displayName: { type: Sequelize.STRING, field: "display_name" },

      email: { type: Sequelize.STRING, allowNull: false },

      password: { type: Sequelize.STRING, allowNull: false },

      image: { type: Sequelize.STRING },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
