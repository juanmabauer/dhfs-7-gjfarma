module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        shipping_id: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tablename: 'carts',
        timestamps: false,
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
        Cart.belongsToMany(models.Product, {
            as: 'products',
            through: 'orders'
        });
    }
    return Cart;
}