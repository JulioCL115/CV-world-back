require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const CvModel = require("./models/cv");
const UserModel = require("./models/user");
const CommnetModel = require("./models/comment");
const CategoryModel = require("./models/category");
const LenguajeModel = require("./models/lenguaje");
const SubscriptionModel = require("./models/subscription");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/curriculum`,
  {
    logging: false,
    native: false,
  }
);

CvModel(sequelize);
UserModel(sequelize);
CommnetModel(sequelize);
CategoryModel(sequelize);
LenguajeModel(sequelize);
SubscriptionModel(sequelize);

const { Cv, User, Comment, Category, Lenguaje, Subscription } = sequelize.models;

// Defino la relación N:1 entre User y Cv
User.hasMany(Cv); // Un usuario puede tener muchos CV
Cv.belongsTo(User); // Un CV pertenece a un usuario

// Defino la relación N:1 entre Comment y Cv
Cv.hasMany(Comment); // Un Cv puede tener muchos comentarios
Comment.belongsTo(Cv); // Un comentario pertenece a un solo Cv

// Defino la relación N:1 entre Category y Cv
Category.hasMany(Cv); // Una Category puede tener muchos Cv
Cv.belongsTo(Category); // Un Cv pertenece a una Category

// Defino la relación N:1 entre Lenguaje y Cv
Lenguaje.hasMany(Cv); // Un Lenguaje puede tener muchos Cv
Cv.belongsTo(Lenguaje); // Un Cv pertenece a un Lenguaje

// Defino la relación N:1 entre User y Comment
User.hasMany(Comment); // Un User puede tener muchos comentarios
Comment.belongsTo(User); // Un comentarios pertenece a un solo User

// Defino la relación N:1 entre Subscription y User
Subscription.hasMany(User); // Una suscripción puede tener muchos usuarios
User.belongsTo(Subscription); // Un usuario pertenece a una suscripción

module.exports = {
  conn: sequelize,
  Cv,
  User,
  Comment,
  Category,
  Lenguaje,
  Subscription,
};
