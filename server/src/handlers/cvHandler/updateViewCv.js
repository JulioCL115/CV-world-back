const updateViewCvController = require('../../controllers/cvController/updateViewCvController');

const updateViewCv = async (req, res) => {
    try {
        const { cvId } = req.params;

        console.log("ID DEL CV EN UPDATE VIEWS: " + cvId);

        if(!cvId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const cvViewsUpdated = await updateViewCvController(cvId);

        if(!cvViewsUpdated) {
            throw new Error('Failed to update Views');
        }

        res.status(200).json({ message: 'Views successfully updated', cvViewsUpdated });

    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });
    }
};

module.exports = updateViewCv;
