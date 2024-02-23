const { Language } = require("../../db");

const getLanguageByIdController = async (languageId) => {
    try {
        const languageFound = await Language.findOne({
            where: { id: languageId, deleted: false }
        });

        return languageFound;

    } catch (error) {
        console.error("Error searching Language by Id: ", error);
        throw error;
    }
};


module.exports = getLanguageByIdController;