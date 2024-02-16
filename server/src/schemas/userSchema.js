const joi = require('@hapi/joi');

const registerUserSchema = joi.object({
    name: joi.string().min(1).max(50).required(),
    email: joi.string().min(1).max(50).required().email().lowercase(),
    password: joi.string().min(6).max(100).required()
});

const loginUserSchema = joi.object({
    email: joi.string().min(1).max(50).required().email().lowercase(),
    password: joi.string().min(6).max(100).required()
});

module.exports = {
    loginUserSchema,
    registerUserSchema
};
