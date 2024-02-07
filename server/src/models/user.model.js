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
        phonenumber: {
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

