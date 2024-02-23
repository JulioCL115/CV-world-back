const { Language } = require("../../db");

const updateLanguageController = async (languageId, name) => {
    try {
        const languageFound = await Language.findByPk(languageId);

        if (!languageFound) {
            const error = new Error("Language not found for updated");
            error.statusCode = 404; 
            throw error;
        }
        
        if (languageFound.deleted) {
            const error = new Error("Cannot update a deleted Language");
            error.statusCode = 400; 
            throw error;
        }

        const languageUpdated = await languageFound.update({
            name
        });

        return languageUpdated;

    } catch (error) {
        console.error("Error updating Language: ", error);
        throw error;
    }
};

module.exports = updateLanguageController;
