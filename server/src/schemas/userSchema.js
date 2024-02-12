const joi = require('@hapi/joi');

const registerUserSchema = joi.object({
    userName: joi.string().min(1).max(50).required(),
    email: joi.string().min(6).max(50).required().email(),
    password: joi.string().min(6).max(20)
});

const loginUserSchema = joi.object({
    email: joi.string().min(6).max(50).required().email(),
    password: joi.string().min(6).max(20)
});

module.exports = {
    loginUserSchema,
    registerUserSchema
};
