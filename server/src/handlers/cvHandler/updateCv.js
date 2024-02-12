const updateCvController = require('../../controllers/cvController/updateCvController');

const updateCv = async (req, res) => {
    try {
        const porpertiesToBeUpdated = req.body

        const { cvId } = req.params;
        
        if(!cvId) {
            return res.status(400).json({ error: "ID is required" });
        }

        if(Object.keys(porpertiesToBeUpdated).length === 0) {
            return res.status(400).json({ error: "The properties to be updated cannot be empty" });
        }

        const cvUpdated = await updateCvController(cvId, porpertiesToBeUpdated);

        if(!cvUpdated) {
            throw new Error('CV not found for update.');
        }

        res.status(200).json({ message: 'CV successfully updated' });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = updateCv;
