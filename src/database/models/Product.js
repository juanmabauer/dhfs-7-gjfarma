module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.CHAR(45),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        stock: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER
        },
        brand_id: {
            type: dataTypes.INTEGER
        },
        image_id: {
            type: dataTypes.INTEGER
        },
    };

    let config = {
        tablename: 'products',
        timestamps: false,
        underscored: true
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models)=> {
        Product.belongsToMany(models.Cart, {
            as: "carts",
            through: 'orders'
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
    return Product;
}