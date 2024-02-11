const postCvController = require('../../controllers/cvController/postCvController');
const { createCvSchema, ZodError } = require('../../schemas/cvSchema');

const createCv = async (req, res) => {
    try {
        const { name, image, header, description, experience, education, contact, skills, speakingLanguages, otherInterests, creationDate, views } = req.body;

        const { userId, categoryId, lenguajeId } = req.params; 

        // createCvSchema.parse({ name, image, header, description, experience, education, contact, skills, speakingLanguages, otherInterests, creationDate, views });

        const cvCreated = await postCvController(name, image, header, description, experience, education, contact, skills, speakingLanguages, otherInterests, views, userId, categoryId, lenguajeId);

        res.status(201).json(cvCreated);

    } catch (error) {
        if(error instanceof ZodError) {
            return res.status(400).json(error.issues.map( (issue) => ({ error: issue.message }) ))
        }

        return res.status(500).json({ error: error.message });
    }
};

module.exports = createCv;
