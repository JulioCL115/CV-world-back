const { Router } = require("express");
const cvRouter = Router();
const getAllCvs = require('../handlers/cvHandler/getAllCvs');
const getCvById = require('../handlers/cvHandler/getCvById');
const createCv = require('../handlers/cvHandler/createCv');
const deleteCv = require('../handlers/cvHandler/deleteCv');
const validateCv = require('../middlewares/validateCv');
const { verifyToken } =  require('../middlewares/authorization');

cvRouter.get('/', getAllCvs);

cvRouter.get('/:cvId', getCvById);

cvRouter.post('/:userId/:categoryId/:lenguajeId',verifyToken, validateCv, createCv);

cvRouter.delete('/:cvId',verifyToken, deleteCv);

module.exports = cvRouter;
