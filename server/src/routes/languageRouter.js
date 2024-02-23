const { Router } = require("express");
const languageRouter = Router();
const getAllLanguages = require('../handlers/languageHandler/getAllLanguages');
const getLanguageById = require('../handlers/languageHandler/getLanguageById');
const createLanguage = require('../handlers/languageHandler/createLanguage');
const deleteLanguage = require('../handlers/languageHandler/deleteLanguage');
const updateLanguage = require('../handlers/languageHandler/updateLanguage');
const verifyToken = require('../middlewares/verifyToken');

languageRouter.post('/', createLanguage);

languageRouter.get('/', getAllLanguages);

languageRouter.get('/:languageId', getLanguageById);

languageRouter.put('/:languageId', updateLanguage);

languageRouter.put('/delete/:languageId', verifyToken, deleteLanguage);

module.exports = languageRouter;