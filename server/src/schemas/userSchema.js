const joi = require('@hapi/joi');

const registerUserSchema = joi.object({
    userName: joi.string().min(5).max(20).required(),
    email: joi.string().min(6).max(50).required().email(),
    password: joi.string().min(6).max(20).required()
});

const loginUserSchema = joi.object({
    email: joi.string().min(6).max(50).required().email(),
    password: joi.string().min(6).max(20).required()
});

module.exports = {
    loginUserSchema,
    registerUserSchema
};
