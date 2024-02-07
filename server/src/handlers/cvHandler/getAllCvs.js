const getAllCvsController = require('../../controllers/cvController/getAllCvsController');
const getCvByQueryController = require('../../controllers/cvController/getCvByQueryController');

const getAllCvs = async (req, res) => {
try{
    const { experienceTitle , experienceYears , studyName, apply } = req.query;
    let response = await getAllCvsController();

    if(experienceTitle || experienceYears || studyName || apply){
      result = getCvByQueryController(response , {
        experienceTitle,
        experienceYears,
        studyName,
        apply,
    } )
    response = result
    console.log(result)
    }
   

    res.status(201).json(response);

}catch (error){
    res.status(500).json({ error: error.message });
}
};

module.exports = getAllCvs;
