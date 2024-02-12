const getAllCvsController = require('../../controllers/cvController/getAllCvsController');
const getCvByQueryController = require('../../controllers/cvController/getCvByQueryController');

const getAllCvs = async (req, res) => {
    try {

        const { queryParam } = req.query;

        const page = parseInt(req.query.page) || 1; // Página actual (por defecto es 1)
        const pageSize = parseInt(req.query.pageSize) || 6; // Tamaño de página (por defecto es 6)

        if(queryParam) {
            const cvsByQuery = await getCvByQueryController(queryParam, page, pageSize);

            if (!cvsByQuery || cvsByQuery.length === 0) {
                return res.status(404).json({ error: "No CVs found." });
            }
    
            res.status(200).json(cvsByQuery);
        } else {
            const allCvs = await getAllCvsController(page, pageSize);

            if (!allCvs || allCvs.length === 0) {
                return res.status(404).json({ error: "No CVs found." });
            }

            res.status(200).json(allCvs);
        } 
       }catch (error) {
        res.status(500).json({ error: error.message });
    }

};

module.exports = getAllCvs;
