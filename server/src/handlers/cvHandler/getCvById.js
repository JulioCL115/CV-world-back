const getCvByIdController = require('../../controllers/cvController/getCvByIdController');

const getCvById = async (req, res) => {

    try {
        const { cvId } = req.params;

        if(!cvId) {
            return res.status(400).json({ error: "An ID is required to be provided" });
        }

        const cv = await  getCvByIdController(cvId);

        if(!cv) {
            return res.status(404).json({ error: 'Cv not found' });
        }

        res.status(200).json(cv);
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

module.exports = getCvById;
