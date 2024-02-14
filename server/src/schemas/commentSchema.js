const joi = require('@hapi/joi');

const commentSchema = joi.object({
    comment: joi.string().min(8).max(200).required()
});

module.exports = {
    commentSchema,
};
