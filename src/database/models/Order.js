module.exports = (sequelize, dataTypes) => {
    let alias = 'Order';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: dataTypes.INTEGER
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        cart_id: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tablename: 'orders',
        timestamps: false,
        underscored: true
    };

    const Order = sequelize.define(alias, cols, config);

    Order.associate = (models)=> {
        Order.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'product_id'
        });
        Order.belongsTo(models.Cart, {
            as: 'carts',
            foreignKey: 'cart_id'
        });
    }
    return Order;
}