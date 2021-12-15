module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.VARCHAR(45),
            allowNull: false
        },
        description: {
            type: dataTypes.LONGTEXT,
            allowNull: false
        },
        price: {
            type: dataTypes.INT,
            allowNull: false
        },
        stock: {
            type: dataTypes.INT,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INT
        },
        brand_id: {
            type: dataTypes.INT
        },
        image_id: {
            type: dataTypes.INT
        },
    };

    let config = {
        tablename: 'products',
        timestamps: true,
        underscored: true
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models)=> {
        Product.hasMany(models.Order, {
            as: 'orders',
            foreignKey: 'product_id'
        });
        Product.belongsTo(models.Image, {
            as: 'images',
            foreignKey: 'image_id'
        });
        Product.belongsTo(models.Category, {
            as: 'categories',
            foreignKey: 'category_id'
        });
        Product.belongsTo(models.Brand, {
            as: 'brands',
            foreignKey: 'brand_id'
        });
    }
}