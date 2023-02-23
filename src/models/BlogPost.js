module.exports = (sequelize, DataTypes) => {
    const blogPost = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
       },
       
      title: DataTypes.STRING,

      content: DataTypes.STRING,

      published: DataTypes.DATE,
      
      updated: DataTypes.DATE,

      userId: { type: DataTypes.INTEGER },
    },

   {
     // timestamps: true,
      createdAt: 'published',
      updatedAt: 'updated',
      tableName: 'blog_posts',
      underscored: true,
    });
  
    // BlogPost tem um id_user (chave estrangeira) que pertence a user
    blogPost.associate = ({ User }) => {
      blogPost.belongsTo(User, { foreignKey: 'userId',  as: 'user' });
    }
  
    return blogPost;
  };