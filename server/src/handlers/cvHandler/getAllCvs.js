const getAllCvsController = require('../../controllers/cvController/getAllCvsController');
const getCvByQueryController = require('../../controllers/cvController/getCvByQueryController');

const getAllCvs = async (req, res) => {
    try {
        const search  = req.query.search;
        const limit = parseInt(req.query.limit) || 6; // Tamaño de página (por defecto es 6)
        const offset = parseInt(req.query.offset) || 1; // Página actual (por defecto es 1)
        const sort = req.query.sort;
        const categories = req.query.categories;
        const languages = req.query.languages;
        const subscriptions = req.query.subscriptions;

        console.log(`filtro por search: ${search} `)
        console.log(`filtro por sort: ${sort}`);
        console.log(`filtro por categories: ${categories}`);
        console.log(`filtro por languages: ${languages}`);
        console.log(`filtro por subscriptions: ${subscriptions}`);
        console.log(`filtro por limit: ${limit}`);
        console.log(`filtro por offset: ${offset}`);

        if(search) {
            const cvsByQuery = await getCvByQueryController(search, limit, offset);

            if (!cvsByQuery || cvsByQuery.length === 0) {
                return res.status(404).json({ error: "CVs not found." });
            }
    
            res.status(200).json(cvsByQuery);
        } else {
            const allCvs = await getAllCvsController(limit, offset);

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
