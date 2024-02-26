const getAllLanguagesControllerDashboard  = require('../../controllers/languageController/getAllLanguagesControllerDashboard'); 

const getAllLanguagesDashboard = async (req, res) => {
    try {
        const allLanguages = await getAllLanguagesControllerDashboard();

        if(!allLanguages || allLanguages.length === 0) {
            return res.status(404).json({ error: "No Languages found." });
        }

        res.status(200).json(allLanguages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllLanguagesDashboard;
