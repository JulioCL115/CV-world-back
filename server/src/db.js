const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, PORT} = process.env;
const CvModel = require("./models/cv");
const UserModel = require("./models/user");
const CommnetModel = require("./models/comment");
const CategoryModel = require("./models/category");
const LanguageModel = require("./models/language");
const SubscriptionModel = require("./models/subscription");

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${DB_NAME}`,
    {
        logging: false,
        native: false,
    }
);

CvModel(sequelize);
UserModel(sequelize);
CommnetModel(sequelize);
CategoryModel(sequelize);
LanguageModel(sequelize);
SubscriptionModel(sequelize);

const { Cv, User, Comment, Category, Language, Subscription } = sequelize.models;

// Defino la relación N:1 entre User y Cv
User.hasMany(Cv); // Un usuario puede tener muchos CV
Cv.belongsTo(User); // Un CV pertenece a un usuario

// Defino la relación N:1 entre Comment y Cv
Cv.hasMany(Comment); // Un Cv puede tener muchos comentarios
Comment.belongsTo(Cv); // Un comentario pertenece a un solo Cv

// Defino la relación N:1 entre Category y Cv
Category.hasMany(Cv); // Una Category puede tener muchos Cv
Cv.belongsTo(Category); // Un Cv pertenece a una Category

// Defino la relación N:1 entre Language y Cv
Language.hasMany(Cv); // Un Language puede tener muchos Cv
Cv.belongsTo(Language); // Un Cv pertenece a un Language

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
    Language,
    Subscription,
};
