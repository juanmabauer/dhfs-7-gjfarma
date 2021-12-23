module.exports = (sequelize, dataTypes) => {
    let alias = 'Image';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.TEXT
        }
    };

    let config = {
        tablename: 'images',
        timestamps: false,
        underscored: true
    };

    const Image = sequelize.define(alias, cols, config);

    Image.associate = (models)=> {
        Image.hasOne(models.Product, {
            as: 'product',
            foreignKey: 'image_id'
        });
    }
    return Image;
}