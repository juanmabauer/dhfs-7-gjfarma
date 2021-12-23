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
            type: dataTypes.STRING(64),
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
            type: dataTypes.STRING
        },
        rol_id: {
            type: dataTypes.INTEGER.UNSIGNED
        }
    };

    let config = {
        tablename: 'users',
        timestamps: false,
        underscored: true
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = (models)=> {
        User.belongsTo(models.Rol, {
            as: 'rol',
            foreignKey: 'rol_id'
        });
        User.hasMany(models.Cart, {
            as: 'carts',
            foreignKey: 'user_id'
        })
    }
    return User;
}