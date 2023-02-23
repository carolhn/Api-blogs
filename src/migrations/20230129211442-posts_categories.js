'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts_categories', {
      postId: {
        type: Sequelize.INTEGER,
        field: 'post_id',
        allowNull: false,
        primaryKey: true,
        references: { model: 'blog_posts', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'category_id',
        primaryKey: true,
        references: { model: 'categories', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },      
    })
  },
  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('posts_categories');
  }
};
