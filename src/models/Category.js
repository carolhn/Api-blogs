module.exports = (sequelize, DataTypes) => {
    const CategoriesTable = sequelize.define('Category', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        name: { allowNull: false, type: DataTypes.STRING }
        },
        { timestamps: false, underscored: true });

    return CategoriesTable;
}
