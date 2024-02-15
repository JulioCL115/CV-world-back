const getAllCvsController = require('../../controllers/cvController/getAllCvsController');
const getCvByQueryController = require('../../controllers/cvController/getCvByQueryController');

const getAllCvs = async (req, res) => {
    try {
        const { limit, page ,search,sort,categories,languages,subscriptions  } = req.query;
        console.log(`filtro por search: ${search} `)
        console.log(`filtro por sort: ${sort}`);
        console.log(`filtro por categories: ${categories}`);
        console.log(`filtro por languages: ${languages}`);
        console.log(`filtro por subscriptions: ${subscriptions}`);
        console.log(`filtro por limit: ${limit}`);
        console.log(`filtro por offset: ${page}`);

        const offset = (page - 1) * limit 

        let allCvs = await getAllCvsController(limit, offset);

        if (!allCvs || allCvs.length === 0) {
            return res.status(404).json({ error: "CVs not found." });
        }

        if(search) {
            const allCvsFound = await getCvByQueryController(search, limit, offset);

            if (!allCvsFound || allCvsFound.length === 0) {
                return res.status(404).json({ error: "CVs not found." });
            }

            console.log(allCvsFound)
            allCvs = allCvsFound
    
        } 

        if (categories) {
            allCvs = allCvs.filter(cv => cv.category === categories);
          }

        if (languages) {
            allCvs = allCvs.filter(cv => cv.lenguaje.toLowerCase() === languages.toLowerCase());
          }
          if(sort){
         if(sort === "views") {
             allCvs.sort((a, b) => b.views - a.views);
            }
        if (sort === "date"){
            allCvs.sort((a, b) =>new Date(b.creationDate) - new Date(a.creationDate));
        }}

      
        res.status(200).json( allCvs);
       }catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllCvs;
