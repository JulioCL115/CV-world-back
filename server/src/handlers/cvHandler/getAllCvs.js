const getAllCvsController = require('../../controllers/cvController/getAllCvsController');
const getCvByQueryController = require('../../controllers/cvController/getCvByQueryController');

const getAllCvs = async (req, res) => {
    try {
        const { search, sort, categories, languages } = req.query;
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        console.log(`filtro por search: ${search} `)
        console.log(`filtro por sort: ${sort}`);
        console.log(`filtro por categories: ${categories}`);
        console.log(`filtro por languages: ${languages}`);
        console.log(`filtro por limit: ${limit}`);
        console.log(`filtro por page: ${page}`);

        const offset = (page - 1) * limit;

        let { totalCvs, cvs } = await getAllCvsController();

        if (!cvs || cvs.length === 0) {
            return res.status(404).json({ error: "CVs not found." });
        }

        if (search) {
            const allCvsFound = await getCvByQueryController(search);
            if (!allCvsFound || allCvsFound.length === 0) {
                return res.status(404).json({ error: "CVs not found." });
            }
            // Actualizar cvs con los CVs encontrados por la búsqueda
            cvs = allCvsFound;
        }

        // Filtrar por categorías
        if (categories && categories.length > 0) {
            cvs = cvs.filter(cv => categories.includes(cv.category));
            
            console.log("cvss",cvs.length)
        }

        // Filtrar por idiomas
        if (languages && languages.length > 0) {
            cvs = cvs.filter(cv => languages.toLowerCase().includes(cv.language.toLowerCase()));
        }

        if (sort) {
            if (sort === "views") {
                cvs.sort((a, b) => b.views - a.views);
            }

            if (sort === "date") {
                cvs.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
            }
        }
        console.log(page)
        totalCvs =cvs.length
        const totalPages = Math.ceil(totalCvs / limit);
        const paginatedCvs = cvs.slice(offset, offset + limit)

        res.status(200).json({ cvs:paginatedCvs, totalPages });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllCvs;