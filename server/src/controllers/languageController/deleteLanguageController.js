const { Language } = require("../../db");

const deleteLanguageController = async (categoryId) => {
    try {
        const languageFound = await Language.findByPk(categoryId);

        if (!languageFound) {
            const error = new Error('Language not found for deletion');
            error.statusCode = 409; 
            throw error;
        }
        
        if (languageFound.deleted) {
            const error = new Error("Language already deleted");
            error.statusCode = 400; 
            throw error;
        }

        await languageFound.update(
            { deleted: true }
        );

        return languageFound;

    } catch (error) {
        console.error("Error deleting Language: ", error);
        throw error;
    }
};


module.exports = deleteLanguageController;
