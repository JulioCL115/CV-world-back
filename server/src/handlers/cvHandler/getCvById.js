const getCvByIdController = require('../../controllers/cvController/getCvByIdController');

const getCvById = async (req, res) => {
    const { idKey } = req.params;
    try {
        if(!idKey) {
            return res.status(400).json({ error: "An ID is required to be provided" });
        }
        const response = await getCvByIdController(idKey);
        console.log(response)
        if(!response) {
            return res.status(404).json({ error: 'Cv not found' });
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(404).send(`No cv found with id: ${idKey}`);
    }

};

module.exports = getCvById;
