const getCvByQueryController = require('../../controllers/cvController/getCvByQueryController');

const getAllCvs = async (req, res) => {
    console.log('getAllCvs')
    try {
        const { search, sort, categories, languages } = req.query;

        const offset = parseInt(req.query.offset ? req.query.offset : 0);
        const limit = parseInt(req.query.limit ? req.query.limit : 16);

        const sortByDate =  sort === "date" ? true : false;
        const sortByViews = sort === "views" ? true : false;

        const { totalCvs, cvs: cvss } = await getCvByQueryController(
            search,
            categories,
            languages,
            limit,
            offset,
            sortByViews,
            sortByDate
        );

        if (!cvss || cvss.length === 0) {
            return res.status(404).json({ error: "CVs not found." });
        }

        const cvs = cvss.map(cv => cv.get({ plain: true }))

        for (let i = 0; i < cvs.length; i++) {
            // log cvId userId and subscriptionId
            console.log(cvs[i].id, cvs[i].User.name, cvs[i].User.Subscription.name)
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