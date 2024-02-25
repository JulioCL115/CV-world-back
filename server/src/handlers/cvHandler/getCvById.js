const getCvByIdController = require('../../controllers/cvController/getCvByIdController');

const getCvById = async (req, res) => {
    try {
        const { cvId } = req.params;

        if(!cvId) {
            return res.status(400).json({ error: "ID is required" });
        }

        console.log('cvId:', cvId)

        const cvFound = await getCvByIdController(cvId);

        if(!cvFound) {
            return res.status(404).json({ error: 'Cv not found' });
        }

        res.status(200).json(cvFound);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getCvById;
