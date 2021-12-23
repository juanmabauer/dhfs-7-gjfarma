module.exports = (sequelize, dataTypes) => {
    let alias = 'Shipping';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        address: {
            type: dataTypes.STRING(80),
            allowNull: false,
        },
        zip: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        cost: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tablename: 'shippings',
        timestamps: false,
        underscored: true
    };

    const Shipping = sequelize.define(alias, cols, config);

    Shipping.associate = (models)=> {
        Shipping.belongsTo(models.Cart, {
            as: 'carts',
            foreignKey: 'shipping_id'
        });
    }
    return Shipping;
}