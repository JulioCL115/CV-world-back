const { z, ZodError } = require('zod');

const loginUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, 'Password is too short').max(16, 'Password is too long'),
});

const registerUserSchema = z.object({
    name: z.string().min(5, 'Name is too short').max(15, 'Name is too long'),
    email: z.string().email(),
    password: z.string().min(6, 'Password is too short').max(16, 'Password is too long')
});

module.exports = {
    loginUserSchema,
    registerUserSchema,
    ZodError
};