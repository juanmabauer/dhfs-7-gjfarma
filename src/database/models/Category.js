module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45)
        }
    };

    let config = {
        tablename: 'categories',
        timestamps: false,
        underscored: true
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = (models)=> {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'category_id'
        });
    }
    return Category;
}