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
        score_cv: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        score_user: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        timestamps: false
    });
}