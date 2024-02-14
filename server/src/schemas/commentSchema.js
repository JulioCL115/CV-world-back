const joi = require('@hapi/joi');

const commentSchema = joi.object({
    comment: joi.string().min(1).max(300).required()
});

module.exports = {
    commentSchema,
};
