const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Category',
    // Definición de las columnas de la tabla 'Category'
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    });
}

