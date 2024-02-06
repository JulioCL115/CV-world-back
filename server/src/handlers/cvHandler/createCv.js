const postCvController = require('../../controllers/cvController/postCvController');
const { createCvSchema, ZodError } = require('../../schemas/cvSchema');

const createCv = async (req, res) => {
    try {
        const { name, image, description, experience, contact, study } = req.body;

        createCvSchema.parse({ name, image, description, experience, contact, study });

        const cvCreated =  await postCvController(name, image, description, experience, contact, study);

        res.status(201).json(cvCreated);

    } catch (error) {
        if(error instanceof ZodError) {
            return res.status(400).json(error.issues.map( (issue) => ({ error: issue.message }) ))
        }

        return res.status(500).json({ error: error.message });
    }
};

module.exports = createCv;