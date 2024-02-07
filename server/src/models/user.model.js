const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User',
    // Definición de las columnas de la tabla 'User'
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'user'
        }
    },
    {
        timestamps: false
    });
}

