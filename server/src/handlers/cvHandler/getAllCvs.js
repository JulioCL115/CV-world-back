const getAllCvsController = require('../../controllers/cvController/getAllCvsController');
const getCvByQueryController = require('../../controllers/cvController/getCvByQueryController');

const getAllCvs = async (req, res) => {
    try {

        const allCvs = await getAllCvsController();

        if (!allCvs || allCvs.length === 0) {
            return res.status(404).json({ error: "No CVs found." });
        }

        res.status(200).json(allCvs);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

module.exports = getAllCvs;
