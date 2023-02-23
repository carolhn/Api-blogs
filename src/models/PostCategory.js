module.exports = (sequelize, DataTypes) => {
    const postsCategories = sequelize.define('PostCategory',
      {
        categoryId: { primaryKey: true, type: DataTypes.INTEGER },
        postId: {  primaryKey: true, type: DataTypes.INTEGER },
    },
      {
        timestamps: false,
        underscored: true,
        tableName: 'posts_categories',
      });

      postsCategories.associate = ({ BlogPost, Category  }) => {
        BlogPost.belongsToMany(Category, {
          as: 'categories',
          foreignKey: 'postId',
          otherKey: 'categoryId',
          through: postsCategories,
        });

        Category.belongsToMany(BlogPost, {
          as: 'post_category',
          foreignKey: 'categoryId',
          otherKey: 'postId',
          through: postsCategories,
        });
      }
  
    return postsCategories;
  };