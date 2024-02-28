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
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING        
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'user'
        },
        photo: {
            type: DataTypes.STRING
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        timestamps: false
    });
}

