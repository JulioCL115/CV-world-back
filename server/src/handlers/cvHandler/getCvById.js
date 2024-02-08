const getCvByIdController = require('../../controllers/cvController/getCvByIdController');

const getCvById = async (req, res) => {
    const { idKey } = req.params;
    try {
        const response = await getCvByIdController(idKey);
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        res.status(404).send(`No cv found with id: ${idKey}`);
    }

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
