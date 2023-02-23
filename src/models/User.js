module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    },
    {
        underscored: true,
        timestamps: false,
    });

    // user tem relacionamento (chave estrangeira) dentro do BlogPost
     User.associate = ({ BlogPost }) => {
        User.hasMany(BlogPost, {
          foreignKey: 'userId',
          as: 'user',
        });  
      }

    return User;
};
