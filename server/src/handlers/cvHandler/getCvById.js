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

};

module.exports = getCvById;
