const postCvController = require('../../controllers/cvController/postCvController');
const { createCvSchema, ZodError } = require('../../schemas/cvSchema');

const createCv = async (req, res) => {
    try {
        const { name, image, description, experience, contact, study, applying } = req.body;
        const userId = req.params.id;
        createCvSchema.parse({ name, image, description, experience, contact, study, applying });

        const cvCreated =  await postCvController(name, image, description, experience, contact, study, applying,userId);

        res.status(201).json(cvCreated);

    } catch (error) {
        if(error instanceof ZodError) {
            return res.status(400).json(error.issues.map( (issue) => ({ error: issue.message }) ))
        }

        return res.status(500).json({ error: error.message });
    }
};

module.exports = createCv;