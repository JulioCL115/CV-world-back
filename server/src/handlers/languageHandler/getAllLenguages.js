const getAllLenguagesController = require('../../controllers/lenguageController/getAllLenguagesController'); 

const getAllLenguages = async (req, res) => {
    try {

        const allLenguagues = await getAllLenguagesController();

        if(!allLenguagues || allLenguagues.length === 0) {
            return res.status(404).json({ error: "No Lenguagues found." });
        }

        res.status(200).json(allLenguagues);
    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllLenguages;
