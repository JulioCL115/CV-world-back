const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Cv',
    // Definición de las columnas de la tabla 'Cv'
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        experience: {
            type: DataTypes.JSONB,
            allowNull: false
        },
        contact: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        study: {
            type: DataTypes.JSONB,
            allowNull: false
        }
    },
    {
        timestamps: false
    });
}