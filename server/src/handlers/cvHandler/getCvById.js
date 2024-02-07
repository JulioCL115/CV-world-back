const getCvByIdController = require('../../controllers/cvController/getCvByIdController');

const getCvById = async (req, res) => {

    try {
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({ error: "An ID is required to be provided" });
        }

        const cv = await  getCvByIdController(id);

        if(!cv) {
            return res.status(404).json({ error: 'Cv not found' });
        }

        res.status(200).json(cv);
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

module.exports = getCvById;
