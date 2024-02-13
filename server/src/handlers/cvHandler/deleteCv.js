const deleteCvController = require('../../controllers/cvController/deleteCvController');

const deleteCv = async (req, res) => {
    try {
        const { cvId } = req.params;

        if(!cvId) {
            return res.status(400).json({ error: "ID is required" });
        }

        await deleteCvController(cvId);

        res.status(200).json({ message: "CV deleted successfully" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = deleteCv;