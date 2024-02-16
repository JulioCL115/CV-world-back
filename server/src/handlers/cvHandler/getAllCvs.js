const getAllCvsController = require('../../controllers/cvController/getAllCvsController');
const getCvByQueryController = require('../../controllers/cvController/getCvByQueryController');

const getAllCvs = async (req, res) => {
    try {
        const search  = req.query.search;
        const sort = req.query.sort;
        const categories = req.query.categories;
        const languages = req.query.languages;
        const limit = parseInt(req.query.limit) || 6; // Tamaño de página (por defecto es 6)
        const page = parseInt(req.query.page) || 1; // Página actual (por defecto es 1)

        const offset = (page - 1) * limit;

        console.log(`filtro por search: ${search} `)
        console.log(`filtro por sort: ${sort}`);
        console.log(`filtro por categories: ${categories}`);
        console.log(`filtro por languages: ${languages}`);
        console.log(`page: ${page} - limit: ${limit}`)

        if(search) {
            const cvsByQuery = await getCvByQueryController(sort, search, categories, languages, limit, offset);

            if (!cvsByQuery || cvsByQuery.length === 0) {
                return res.status(404).json({ error: "CVs not found." });
            }
    
            res.status(200).json(cvsByQuery);
        } else {
            const allCvs = await getAllCvsController(sort, categories, languages, limit, offset);

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
