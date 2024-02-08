const { z, ZodError } = require('zod');

const createCvSchema = z.object({
    name: z.string().min(3, 'Name is too short').max(20, 'Name is too long'),
    image: z.string().url({ message: 'Invalid URL format for image' }),
    header: z.string().min(3, 'Name is too short').max(20, 'Name is too long'),
    description: z.string().min(10, 'Description is too short').max(50, 'Description is too long'),
    experience: z.array(z.unknown()).refine(arr => arr && arr.length >  0, {
        message: 'Experience is required'
    }),
    education: z.array(z.unknown()).refine(arr => arr && arr.length >  0, {
        message: 'Education is required'
    }),
    contact: z.object(),
    skils: z.array(z.string()),
    speakingLanguages: z.array(z.string()),
    otherInterests: z.array(z.string()),
    creationDate: z.string(),
    views: z.number()
});

module.exports = {
    createCvSchema,
    ZodError
};