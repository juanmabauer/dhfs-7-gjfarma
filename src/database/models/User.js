module.exports = (sequelize, dataTypes) => {
    let alias = 'User';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false,
            unique: true
        },
        category: {
            type: dataTypes.STRING(45)
        },
        avatar: {
            type: dataTypes.STRING(80)
        },
        rol_id: {
            type: dataTypes.INT.UNSIGNED
        }
    };

    let config = {
        tablename: 'users',
        timestamps: true,
        underscored: true
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = (models)=> {
        User.belongsTo(models.Rol, {
            as: 'rols',
            foreignKey: 'rol_id'
        });
        User.hasMany(models.Cart, {
            as: 'carts',
            foreignKey: 'user_id'
        })
    }
}