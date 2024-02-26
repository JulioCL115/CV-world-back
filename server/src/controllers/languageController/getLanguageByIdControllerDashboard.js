const { Language } = require("../../db");

const getLanguageByIdControllerDashboard = async (languageId) => {
    try {
        const languageFound = await Language.findByPk(languageId);

        return languageFound;

    } catch (error) {
        console.error("Error searching Language by Id: ", error);
        throw error;
    }
};


module.exports = getLanguageByIdControllerDashboard;