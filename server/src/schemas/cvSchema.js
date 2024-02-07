const { z, ZodError } = require('zod');

const createCvSchema = z.object({
    name: z.string().min(3, 'Name is too short').max(20, 'Name is too long'),
    image: z.array(z.unknown()).refine(arr => arr && arr.length >  0, {
        message: 'Image is required'
    }),
    description: z.string().min(10, 'Description is too short').max(50, 'Description is too long'),
    experience: z.array(z.unknown()).refine(arr => arr && arr.length >  0, {
        message: 'Experience is required'
    }),
    contact: z.string().min(10, 'Contact is too short').max(50, 'Contact is too long'),
    study: z.array(z.unknown()).refine(arr => arr && arr.length >  0, {
        message: 'Study is required'
    }),
    applying: z.string().min(4, 'Applying is too short').max(25, 'Applying is too long')
});

module.exports = {
    createCvSchema,
    ZodError
};