const getLanguageByIdControllerDashboard = require('../../controllers/languageController/getLanguageByIdControllerDashboard');

const getLanguageByIdDashboard = async (req, res) => {
    try {
        const { languageId } = req.params;

        if(!languageId) {
            return res.status(400).json({ error: "ID is required" });
        }
        const languageFound = await getLanguageByIdControllerDashboard(languageId);

        if(!languageFound || languageFound.length === 0) {
            return res.status(404).json({ error: "No Languages found." });
        }

        res.status(200).json(languageFound);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getLanguageByIdDashboard;
