const restoreLanguageController = require('../../controllers/languageController/restoreLanguageController');

const restoreLanguage = async (req, res) => {
    try {
        const { languageId } = req.params;

        if(!languageId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const languageRestored = await restoreLanguageController(languageId);

        if(!languageRestored) {
            throw new Error('Failed to restore Language.');
        }

        res.status(200).json({ message: "Language restored successfully", languageRestored });
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });    
    }
};

module.exports = restoreLanguage;
