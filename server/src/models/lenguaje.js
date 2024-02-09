const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Lenguaje',
    // Definición de las columnas de la tabla 'Lenguaje'
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

