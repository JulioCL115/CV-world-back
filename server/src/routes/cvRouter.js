const { Router } = require("express");
const cvRouter = Router();
const getAllCvs = require('../handlers/cvHandler/getAllCvs');
const getCvById = require('../handlers/cvHandler/getCvById');
const createCv = require('../handlers/cvHandler/createCv');

cvRouter.get('/', getAllCvs);

cvRouter.get('/:idKey', getCvById);

cvRouter.post('/', createCv);

module.exports = cvRouter;
