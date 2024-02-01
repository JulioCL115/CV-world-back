require ('dotenv').config()
const { Sequelize } = require('sequelize');
const{ DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const CvModel = require('./models/cv.model');
const UserModel = require('./models/user.model');
const CommnetModel = require('./models/comment.model');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/curriculum`, {
    logging: false,
    native: false, 
});

CvModel(sequelize);
UserModel(sequelize);
CommnetModel(sequelize);

// DESESCTRUCTURACION DE MODELOS
const { Cv, User, Comment } = sequelize.models;

//Defino la relación N:1 entre Cv y User

//Defino la relación : entre User y Comment


// RELACIONES DE MODELOS

module.exports = {
    conn: sequelize,   // para importar la conexión { conn } = require('./db.js')
    ...sequelize.models // para cuando alla modelos
}