module.exports = (sequelize, dataTypes) => {
    let alias = 'Order';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: dataTypes.INT
        },
        product_id: {
            type: dataTypes.INT
        },
        cart_id: {
            type: dataTypes.INT
        }
    };

    let config = {
        tablename: 'orders',
        timestamps: true,
        underscored: true
    };

    const Order = sequelize.define(alias, cols, config);

    Order.associate = (models)=> {
        Order.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'product_id'
        });
        Order.belongsTo(models.Cart, {
            as: 'carts',
            foreignKey: 'cart_id'
        });
    }
}