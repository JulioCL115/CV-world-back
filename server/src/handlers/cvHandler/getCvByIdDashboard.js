const getCvByIdControllerDashboard = require('../../controllers/cvController/getCvByIdControllerDashboard');

const getCvByIdDashboard = async (req, res) => {
    try {
        const { cvId } = req.params;

        if(!cvId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const cvFound = await getCvByIdControllerDashboard(cvId);

        if(!cvFound) {
            return res.status(404).json({ error: 'Cv not found' });
        }

        res.status(200).json(cvFound);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getCvByIdDashboard;
