const restoreCvController = require('../../controllers/cvController/restoreCvController');

const restoreCv = async (req, res) => {
    try {
        const { cvId } = req.params;

        if(!cvId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const cvRestored = await restoreCvController(cvId);

        if(!cvRestored) {
            throw new Error('Failed to restore Cv.');
        }

        res.status(200).json({ message: "Cv restored successfully", cvRestored });
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });    
    }
};

module.exports = restoreCv;