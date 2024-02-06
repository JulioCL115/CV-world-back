const { z, ZodError } = require('zod');

const createCvSchema = z.object({
    name: z.string().nonempty('Name is required').min(5, 'Name is too short').max(20, 'Name is too long'),
    image: z.string().nonempty('Image is required'),
    description: z.string().nonempty('Description is required').min(10, 'Description is too short').max(50, 'Description is too long'),
    experience: z.array(z.unknown()).refine(arr => arr && arr.length >  0, {
        message: 'Experience is required'
    }),
    experience: z.array(z.unknown()).refine(arr => arr && arr.length >  0, {
        message: 'Experience is required'
    }),
    contact: z.string().nonempty('Contact is required').min(10, 'Contact is too short').max(50, 'Contact is too long'),
    study: z.array(z.unknown()).refine(arr => arr && arr.length >  0, {
        message: 'Study is required'
    }),
});

module.exports = {
    createCvSchema,
    ZodError
};