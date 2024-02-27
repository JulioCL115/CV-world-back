const createLanguageController = require('../../controllers/languageController/createLanguageController');

const createLanguage = async (req, res) => {
    try {
        const { name } = req.body;

        const languageCreated = await createLanguageController(name);

        if(!languageCreated) {
            return res.status(404).json({ error: "No Language created." });
        }

        res.status(200).json(languageCreated);
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });       
    }
};

module.exports = createLanguage;
