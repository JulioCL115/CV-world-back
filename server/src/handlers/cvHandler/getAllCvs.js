const getAllCvsController = require('../../controllers/cvController/getAllCvsController');
const getCvByQueryController = require('../../controllers/cvController/getCvByQueryController');
const paginateData = require('../../controllers/cvController/paginateController');
const getAllCvs = async (req, res) => {
try{
    const {page,pageSize, experienceTitle , experienceYears , studyName, experienceStudy , apply } = req.query;
    let response = await getAllCvsController();

    if(experienceTitle || experienceYears || studyName || experienceStudy || apply){
      result = getCvByQueryController(response , {
        experienceTitle,
        experienceYears,
        studyName,
        experienceStudy,
        apply,
    } )
    response = result
    console.log(result)
    }

    response = paginateData(response, page, pageSize);
    res.status(201).json({ data: response, totalcv: response.length });

}catch (error){
    res.status(500).json({ error: error.message });
}
};

module.exports = getAllCvs;
