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
            type: DataTypes.STRING
        },
        header: {
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
        education: {
            type: DataTypes.JSONB,
            allowNull: false
        },
        contact: {
            type: DataTypes.JSONB,
            allowNull: false
        },
        skills: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        speakingLanguages: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false        
        },
        otherInterests: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        creationDate: {
            type: DataTypes.STRING
        },
        views: {
            type: DataTypes.INTEGER,
            defaultValue: 0
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