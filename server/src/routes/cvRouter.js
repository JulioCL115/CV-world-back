const { Router } = require("express");
const cvRouter = Router();
const getAllCvs = require('../handlers/cvHandler/getAllCvs');
const getCvById = require('../handlers/cvHandler/getCvById');
const createCv = require('../handlers/cvHandler/createCv');
const updateCv = require('../handlers/cvHandler/updateCv');
const deleteCv = require('../handlers/cvHandler/deleteCv');
const verifyToken =  require('../middlewares/verifyToken');

cvRouter.get('/', getAllCvs);

cvRouter.get('/:cvId', getCvById);

cvRouter.post('/:userId/:categoryId/:lenguajeId',  createCv);

cvRouter.put('/:cvId',verifyToken, updateCv);

cvRouter.put('/delete/:cvId',verifyToken, deleteCv);

module.exports = cvRouter;
