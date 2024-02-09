const { z, ZodError } = require('zod');

const registerUserSchema = z.object({
    name: z.string().min(5, 'Name is too short').max(15, 'Name is too long'),
    email: z.string().email(),
    password: z.string().min(6, 'Password is too short').max(16, 'Password is too long')
});

const loginUserSchema = z.object({
    email: z.string().email(),
    password: z.string()
});

module.exports = {
    loginUserSchema,
    registerUserSchema,
    ZodError
};