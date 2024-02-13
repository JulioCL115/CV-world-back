const postCvController = require('../../controllers/cvController/postCvController');
 const { createCvSchema, ZodError } = require('../../schemas/cvSchema');

const createCv = async (req, res) => {
    try {
        const { name, image, header, description, experience, education, contact, skills, speakingLanguages, otherInterests, creationDate, views } = req.body;

        const { userId, categoryId, lenguajeId } = req.params; 
         const jsonObjectExperience = JSON.parse(experience || '{}');
        const jsonObjectEducation = JSON.parse(education || '{}');
        const jsonObjectContact = JSON.parse(contact || '{}');


        console.log(req.body)

         createCvSchema.parse({ name, image, header, description,  experience:jsonObjectExperience, education:jsonObjectEducation, contact:jsonObjectContact, skills, speakingLanguages, otherInterests, creationDate, views });

         console.log("schemas",createCvSchema)
        const cvCreated = await postCvController(name,req, image, header, description, experience, education, contact, skills, speakingLanguages, otherInterests, views, userId, categoryId, lenguajeId);

        res.status(201).json(cvCreated);

    } catch (error) {
         if(error instanceof ZodError) {
            return res.status(400).json(error.issues.map( (issue) => ({ error: issue.message }) ))
         }

        return res.status(500).json({ error: error.message });
    }
};

module.exports = createCv;
