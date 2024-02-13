const deleteCvController = require('../../controllers/cvController/deleteCvController');

const deleteCv = async (req, res) => {
    try {
        const { cvId } = req.params;

        if(!cvId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const cvDeleted = await deleteCvController(cvId);

        if(!cvDeleted) {
            throw new Error('Failed to delete CV');
        }

        res.status(200).json({ message: "CV deleted successfully", cvDeleted });

    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });
    }
};

module.exports = deleteCv;