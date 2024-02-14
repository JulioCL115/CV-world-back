const getAllCvsController = require('../../controllers/cvController/getAllCvsController');
const getCvByQueryController = require('../../controllers/cvController/getCvByQueryController');

const getAllCvs = async (req, res) => {
    try {
        const search  = req.query.search;
        const offset = parseInt(req.query.offset) || 1; // Página actual (por defecto es 1)
        const limit = parseInt(req.query.limit) || 6; // Tamaño de página (por defecto es 6)

        if(search) {
            const cvsByQuery = await getCvByQueryController(search, offset, limit);

            if (!cvsByQuery || cvsByQuery.length === 0) {
                return res.status(404).json({ error: "CVs not found." });
            }
    
            res.status(200).json(cvsByQuery);
        } else {
            const allCvs = await getAllCvsController(offset, limit);

            if (!allCvs || allCvs.length === 0) {
                return res.status(404).json({ error: "CVs not found." });
            }

            res.status(200).json(allCvs);
        } 
       }catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllCvs;
