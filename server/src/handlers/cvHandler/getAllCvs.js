const getAllCvsController = require('../../controllers/cvController/getAllCvsController');
const getCvByQueryController = require('../../controllers/cvController/getCvByQueryController');

const getAllCvs = async (req, res) => {
    console.log('getAllCvs')
    try {
        const { search, sort, categories, languages } = req.query;

        console.log(categories, 'CATEGORIES')

        const offset = parseInt(req.query.offset ? req.query.offset : 0);
        const limit = parseInt(req.query.limit ? req.query.limit : 16);

        const { totalCvs, cvs } = await getCvByQueryController(search, categories, languages, limit, offset);

        if (!cvs || cvs.length === 0) {
            return res.status(404).json({ error: "CVs not found." });
        }

        // // Empiezan filtros 
        // if (categories && categories.length > 0) {
        //     cvs = cvs.filter(cv => categories.includes(cv.category));
        // }

        // if (languages && languages.length > 0) {
        //     cvs = cvs.filter(cv => languages.toLowerCase().includes(cv.language.toLowerCase()));
        // }

        // // Terminan los filtros

        if (sort) {
            if (sort === "views") {
                cvs.sort((a, b) => b.views - a.views);
            }

            if (sort === "date") {
                cvs.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
            }
        }

        const totalPages = Math.ceil(totalCvs / limit);

        console.log(`total de paginas: ${totalPages}`);

        res.status(200).json({ cvs, totalPages });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllCvs;
