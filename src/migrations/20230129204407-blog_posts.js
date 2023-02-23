'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      title: { type: Sequelize.STRING, allowNull: false },

      content: { type: Sequelize.STRING, allowNull: false },

      published: { type: Sequelize.DATE, allowNull: false },

      updated: { type: Sequelize.DATE, allowNull: false },
      
      userId: { type: Sequelize.INTEGER, field: 'user_id', allowNull: false,
      references: { model: 'users', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
     },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('blog_posts');
  }
};
