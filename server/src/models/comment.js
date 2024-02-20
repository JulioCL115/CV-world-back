const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Comment',
    // Definición de las columnas de la tabla 'Comment'
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        createdAt: { // New field for creation date
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        timestamps: false
    });
}