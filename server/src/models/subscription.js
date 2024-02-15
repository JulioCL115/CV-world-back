const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Subscription',
    // Definición de las columnas de la tabla 'Subscription'
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'No subscription'
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        included: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        notIncluded: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    },
    {
        timestamps: false
    });
}

