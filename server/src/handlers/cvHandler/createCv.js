const postCvController = require('../../controllers/cvController/postCvController');

const createCv = async (req, res) => {
    try {
        const { name, image, header, description, experience, education, contact, skills, speakingLanguages, otherInterests, views, category, language } = req.body;

        const { userId } = req.params; 
      
        if (!userId) {
            return res.status(400).json({ error: 'Please provide a valid ID in the request parameters' });
        }

        // const { error } = createCvSchema.validate({ name, header, description, contact, skills, speakingLanguages, otherInterests, creationDate, views });

        // if(error) {
        //     return res.status(400).json({ error: error.details[0].message });
        // }
        
        const cvCreated = await postCvController(name, image, header, description, experience, education, contact, skills, speakingLanguages, otherInterests, views, category, language, userId, req);

        res.status(201).json(cvCreated);

    } catch (error) {
        if (error.statusCode === 409) {
            return res.status(409).json({ error: error.message });
        }
        return res.status(500).json({ error: error.message });
    }
};

module.exports = createCv;
