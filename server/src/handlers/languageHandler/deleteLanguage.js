const deleteLanguageController = require('../../controllers/languageController/deleteLanguageController');

const deleteLanguage = async (req, res) => {
    try {
        const { languageId } = req.params;

        if(!languageId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const languageDeleted = await deleteLanguageController(languageId);

        if(!languageDeleted) {
            throw new Error('Failed to delete Language.');
        }

        res.status(200).json(languageDeleted);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = deleteLanguage;
