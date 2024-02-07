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
        const { id } = req.params;

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
