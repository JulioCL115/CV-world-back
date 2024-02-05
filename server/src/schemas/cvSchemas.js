const z = require('zod')

const createCvSchema = z.object({
    name: z.string({
        required_error: 'Name is required'
    }).min(2, 'Name is too short').max(30, 'Name is too long'),
    image: z.string({
        required_error: 'Image is required'
    }),
    text: z.string({
        required_error: 'Text is required'
    })
})