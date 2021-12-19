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
            type: dataTypes.INT,
            allowNull: false
        },
        cost: {
            type: dataTypes.INT
        }
    };

    let config = {
        tablename: 'shippings',
        timestamps: true,
        underscored: true
    };

    const Shipping = sequelize.define(alias, cols, config);

    Shipping.associate = (models)=> {
        Shipping.belongsTo(models.Cart, {
            as: 'carts',
            foreignKey: 'shipping_id'
        });
    }
}