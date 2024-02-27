const updateLanguageController = require('../../controllers/languageController/updateLanguageController');

const updateLanguage = async (req, res) => {
    try {
        const { languageId } = req.params;

        const { name } = req.body;

        if(!languageId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const languageUpdated = await updateLanguageController(languageId, name);

        if(!languageUpdated) {
            throw new Error('Failed to update Language.');
        }

        res.status(200).json(languageUpdated);
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });    
    }
};

module.exports = updateLanguage;
