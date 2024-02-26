const getAllCvsControllerDashboard = require('../../controllers/cvController/getAllCvsControllerDashboard');

const getAllCvsDashboard = async (req, res) => {
    try {
        const allCvs = await getAllCvsControllerDashboard();

        if (!allCvs || allCvs.length === 0) {
            return res.status(404).json({ error: "CVs not found." });
        }

        res.status(200).json(allCvs);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllCvsDashboard;