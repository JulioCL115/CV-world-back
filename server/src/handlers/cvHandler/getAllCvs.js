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

        let { totalCvs, cvs } = await getAllCvsController(limit, offset);

        if(!cvs || cvs.length === 0) {
            return res.status(404).json({ error: "CVs not found." });
        }

        if(search) {
            const { totalCvs: searchTotalCvs, cvs: searchCvs  } = await getCvByQueryController(search, limit, offset);
        
            if (!searchCvs || searchCvs.length === 0) {
                return res.status(404).json({ error: "CVs not found." });
            }

            totalCvs = searchTotalCvs;
            cvs = searchCvs
        }

        if(categories && categories.length > 0) {
            cvs = cvs.filter(cv => categories.includes(cv.category));
        }

        if(languages && languages.length > 0 ) {
            cvs = cvs.filter(cv => languages.toLowerCase().includes(cv.language.toLowerCase()));
        }

        if(sort) {
            if(sort === "views") {
                cvs.sort((a, b) => b.views - a.views);
            }

            if(sort === "date"){
                cvs.sort((a, b) =>new Date(b.creationDate) - new Date(a.creationDate));
            }
        }

        const totalPages = Math.ceil(cvs.length / limit);

        res.status(200).json({ cvs, totalPages });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllCvs;
