const { Router } = require("express");
const cvRouter = Router();
const getAllCvs = require('../handlers/cvHandler/getAllCvs');
const getCvById = require('../handlers/cvHandler/getCvById');
const createCv = require('../handlers/cvHandler/createCv');
const updateCv = require('../handlers/cvHandler/updateCv');
const deleteCv = require('../handlers/cvHandler/deleteCv');
const updateViewCv = require('../handlers/cvHandler/updateViewCv')
const verifyToken =  require('../middlewares/verifyToken');

cvRouter.get('/', getAllCvs);

cvRouter.get('/:cvId', getCvById);

cvRouter.post('/:userId', verifyToken, createCv);

cvRouter.put('/:cvId', updateCv);

cvRouter.put('/updateView/:cvId', updateViewCv);

cvRouter.put('/delete/:cvId', verifyToken, deleteCv);

module.exports = cvRouter;
