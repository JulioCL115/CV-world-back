const { z, ZodError } = require('zod');

const commentSchema = z.object({
    comment: z.string().min(5, 'Comment is too short').max(200, 'Comment is too long')
})

module.exports = {
    commentSchema,
    ZodError
};