const getCvByIdController = require('../../controllers/cvController/getCvByIdController');

const getCvById = async (req, res) => {
    try {
        const { cvId } = req.params;
       

        if(!cvId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const cvFound = await getCvByIdController(cvId);

        if(!cvFound) {
            return res.status(404).json({ error: 'Cv not found' });
        }

        console.log("este es un cv",cvFound)

        res.status(200).json(cvFound);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

module.exports = getCvById;
