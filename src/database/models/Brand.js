module.exports = (sequelize, DataTypes) => {
    let alias = 'Brand';

    let cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(45)
        }
    };

    let config = {
        tablename: 'brands',
        timestamps: true,
        underscored: true
    };

    const Brand = sequelize.define(alias, cols, config);

    Brand.associate = (models)=> {
        Brand.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'brand_id'
        });
    }
}