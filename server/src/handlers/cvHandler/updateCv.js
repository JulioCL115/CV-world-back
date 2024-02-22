const updateCvController = require('../../controllers/cvController/updateCvController');

const updateCv = async (req, res) => {
    try {
        const propertiesToBeUpdated  = req.body

        const { cvId } = req.params;

        console.log("CV QUE LLEGA POR PARAMS:", cvId);
        
        if(!cvId) {
            return res.status(400).json({ error: "ID is required" });
        }

        if(Object.keys(propertiesToBeUpdated ).length === 0) {
            return res.status(400).json({ error: "The properties to be updated cannot be empty" });
        }

        const cvUpdated = await updateCvController(cvId, propertiesToBeUpdated );

        if(!cvUpdated) {
            throw new Error('Failed to update CV');
        }

        res.status(200).json({ message: 'CV successfully updated', cvUpdated });

    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });
    }
};

module.exports = updateCv;
