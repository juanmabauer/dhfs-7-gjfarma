module.exports = (sequelize, dataTypes) => {
    let alias = 'Brand';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.VARCHAR(45)
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