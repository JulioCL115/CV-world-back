const getAllCvsController = require('../../controllers/cvController/getAllCvsController');
const getCvByQueryController = require('../../controllers/cvController/getCvByQueryController');

const getAllCvs = async (req, res) => {
try{
    let response = await getAllCvsController();
    res.status(201).json(response);

}catch (error){
    res.status(500).json({ error: error.message });
}
};

module.exports = getAllCvs;
