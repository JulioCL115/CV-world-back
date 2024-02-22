const { Router } = require("express");
const languageRouter = Router();
const getAllLanguages = require('../handlers/languageHandler/getAllLanguages');
const getLanguageById = require('../handlers/languageHandler/getLanguageById');
const createLanguage = require('../handlers/languageHandler/createLanguage')
const verifyToken = require('../middlewares/verifyToken');

languageRouter.post('/', createLanguage);

languageRouter.get('/', getAllLanguages);

languageRouter.get('/:languageId', getLanguageById);

module.exports = languageRouter;