const joi = require('@hapi/joi');

const createCvSchema = joi.object({
    name: joi.string().min(3).max(20).required(),
    header: joi.string().min(3).max(20),
    description: joi.string().min(10).max(200),
    contact: joi.object({
        phoneNumber: joi.string().min(6).max(15).required(),
        location: joi.string().min(3).max(50).required(),
    }).required(),    
    skills: joi.array().items(joi.string()).required(),
    speakingLanguages: joi.array().items(joi.string()).required(),
    otherInterests: joi.array().items(joi.string()).required(),
    creationDate: joi.string().allow('', null), 
    views: joi.number().allow(null) 
});

module.exports = createCvSchema;
/*
 - experience: [ { from: '', to: '', company: '', role: '', responsabilities: ''  } ]

 - education: [ { from: '', to: '', where: '', about: '' } ]

 - contact: [ { direction: '', phone: '', email: ''  } ]
*/