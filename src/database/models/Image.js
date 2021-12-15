module.exports = (sequelize, dataTypes) => {
    let alias = 'Image';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.VARCHAR(80)
        }
    };

    let config = {
        tablename: 'images',
        timestamps: true,
        underscored: true
    };

    const Image = sequelize.define(alias, cols, config);

    Image.associate = (models)=> {
        Image.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'image_id'
        });
    }
}