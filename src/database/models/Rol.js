module.exports = (sequelize, dataTypes) => {
    let alias = 'Rol';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(20)
        }
    };

    let config = {
        tablename: 'rols',
        timestamps: false,
        underscored: true
    };

    const Rol = sequelize.define(alias, cols, config);

    Rol.associate = (models)=> {
        Rol.hasMany(models.User, {
            as: 'users',
            foreignKey: 'rol_id'
        })
    }
    return Rol;
}