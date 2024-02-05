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

const { Cv, User, Comment } = sequelize.models;

// Defino la relación N:1 entre User y Cv
User.hasMany(Cv); // Un usuario puede tener muchos CV
Cv.belongsTo(User); // Un CV pertenece a un usuario

// Defino la relación N:1 entre Comment y Cv
Cv.hasMany(Comment); // Un Cv puede tener muchos comentarios
Comment.belongsTo(Cv); // Un comentario pertenece a un solo Cv

module.exports = {
    conn: sequelize,
    Cv,
    User,
    Comment
}