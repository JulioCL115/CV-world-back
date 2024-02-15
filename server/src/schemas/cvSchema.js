const joi = require('@hapi/joi');

const createCvSchema = joi.object({
    name: joi.string().min(1).max(20).required(),
    header: joi.string().min(3).max(20).required(),
    description: joi.string().min(10).max(200).required(),
    experience: joi.array().items(joi.object({
        from: joi.string().allow('', null),
        to: joi.string().allow('', null),
        company: joi.string().allow('', null),
        role: joi.string().allow('', null),
        responsabilities: joi.string().allow('', null),
    })).required(),
    education: joi.array().items(joi.object({
        from: joi.string().allow('', null),
        to: joi.string().allow('', null),
        where: joi.string().allow('', null),
        about: joi.string().allow('', null),
    })).required(),
    contact: joi.object({
        phone: joi.number().min(5).max(20).required(),
        location: joi.string().min(3).max(50).required(),
        email: joi.string().min(1).max(50).required().email(),
    }).required(),
    skills: joi.array().items(joi.string()).required(),
    speakingLanguages: joi.array().items(joi.string()).required(),
    otherInterests: joi.array().items(joi.string()).required(),
    creationDate: joi.string().allow('', null), 
    views: joi.number().allow(null) 
});

module.exports = createCvSchema;
