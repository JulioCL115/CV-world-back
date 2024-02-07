const { z, ZodError } = require('zod');

const createUserSchema = z.object({
    // name: z.string().min(4, 'User Name is too short').max(15, 'User Name is too long'),
    email: z.string().email(),
    password: z.string().min(6, 'Password is too short').max(16, 'Password is too long'),
});

module.exports = {
    createUserSchema,
    ZodError
};