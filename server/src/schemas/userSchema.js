const joi = require('@hapi/joi');

const registerUserSchema = joi.object({
    name: joi.string().min(1).max(50).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).max(200).required()
});

const loginUserSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).max(200).required()
});

module.exports = {
    loginUserSchema,
    registerUserSchema
};
