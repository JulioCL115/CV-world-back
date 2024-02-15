const postCvController = require('../../controllers/cvController/postCvController');

const createCv = async (req, res) => {
    try {
        const { name, image, header, description, experience, education, contact, skills, speakingLanguages, otherInterests, views } = req.body;

        const { userId, categoryId, lenguajeId } = req.params; 
      
        if (!userId || !categoryId || !lenguajeId) {
            return res.status(400).json({ error: 'Please provide a valid ID in the request parameters' })
        }

        // const { error } = createCvSchema.validate({ name, header, description, contact, skills, speakingLanguages, otherInterests, creationDate, views });

        // if(error) {
        //     return res.status(400).json({ error: error.details[0].message });
        // }
        console.log(name,contact)
        const cvCreated = await postCvController({name, req,image, header, description, experience, education, contact, skills, speakingLanguages, otherInterests, views}, userId, categoryId, lenguajeId);

        res.status(201).json(cvCreated);

    } catch (error) {
        if (error.statusCode === 409) {
            return res.status(409).json({ error: error.message });
        }
        return res.status(500).json({ error: error.message });
    }
};

module.exports = createCv;
