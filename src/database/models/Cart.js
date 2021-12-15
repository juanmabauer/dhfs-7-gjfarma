module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INT
        },
        shipping_id: {
            type: dataTypes.INT
        }
    };

    let config = {
        tablename: 'carts',
        timestamps: true,
        underscored: true
    };

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = (models)=> {
        Cart.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'user_id'
        });
        Cart.belongsTo(models.Shipping, {
            as: 'shippings',
            foreignKey: 'shipping_id'
        });
        Cart.hasMany(models.Order, {
            as: 'orders',
            foreignKey: 'cart_id'
        });
    }
}