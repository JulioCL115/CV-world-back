const { Router } = require("express");
const cvRouter = Router();
const getAllCvs = require('../handlers/cvHandler/getAllCvs');
const getCvById = require('../handlers/cvHandler/getCvById');
const createCv = require('../handlers/cvHandler/createCv');
const updateCv = require('../handlers/cvHandler/updateCv');
const deleteCv = require('../handlers/cvHandler/deleteCv');
const updateViewCv = require('../handlers/cvHandler/updateViewCv');
const getAllCvsDashboard = require('../handlers/cvHandler/getAllCvsDashboard');
const getCvByIdDashboard = require('../handlers/cvHandler/getCvByIdDashboard');
const verifyToken =  require('../middlewares/verifyToken');

cvRouter.get('/dashboard/:cvId', verifyToken, getCvByIdDashboard);

cvRouter.get('/dashboard', verifyToken, getAllCvsDashboard);

cvRouter.post('/:userId', verifyToken, createCv);

cvRouter.put('/:cvId', updateCv);

cvRouter.put('/delete/:cvId', verifyToken, deleteCv);

cvRouter.put('/updateView/:cvId', updateViewCv);

cvRouter.get('/:cvId', getCvById);

cvRouter.get('/', getAllCvs);

module.exports = cvRouter;
