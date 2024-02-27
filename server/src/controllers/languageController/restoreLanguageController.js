const { Language } = require("../../db");

const restoreLanguageController = async (languageId) => {
    try {
        const languageFound = await Language.findByPk(languageId);

        if (!languageFound) {
            const error = new Error("Language not found for restoration");
            error.statusCode = 404; 
            throw error;
        }

        if (!languageFound.deleted) {
            const error = new Error("Language is not deleted. Cannot restore.");
            error.statusCode = 400; 
            throw error;
        }
        
        await languageFound.update({
            deleted: false 
        });

        return languageFound;

    } catch (error) {
        console.error('Error restoring Language:', error);
        throw error;
    }
};

module.exports = restoreLanguageController;
