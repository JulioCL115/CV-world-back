const { Language } = require("../../db");

const createLanguageController = async (name) => {
    try {
        const languageFound = await Language.findOne(
            { where: { name, deleted: false } }
        );
       
        if (languageFound) {
            const error = new Error('Language already exists');
            error.statusCode = 409; 
            throw error;
        }

        const languageCreated = await Language.create({
            name
        })

        return languageCreated;

    } catch (error) {
        console.error("Error creating Language: ", error);
        throw error;
    }
};


module.exports = createLanguageController;
