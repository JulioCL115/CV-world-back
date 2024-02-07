const { Router } = require("express");
const cvRouter = Router();
const getAllCvs = require('../handlers/cvHandler/getAllCvs');
const getCvById = require('../handlers/cvHandler/getCvById');
const createCv = require('../handlers/cvHandler/createCv');
const validateCv = require('../middlewares/validateCv');

cvRouter.get('/', getAllCvs);

cvRouter.get('/:cvId', getCvById);

cvRouter.post('/:userId', validateCv, createCv);

module.exports = cvRouter;
