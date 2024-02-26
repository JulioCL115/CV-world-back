const { Router } = require("express");
const languageRouter = Router();
const getAllLanguages = require('../handlers/languageHandler/getAllLanguages');
const getLanguageById = require('../handlers/languageHandler/getLanguageById');
const createLanguage = require('../handlers/languageHandler/createLanguage');
const deleteLanguage = require('../handlers/languageHandler/deleteLanguage');
const updateLanguage = require('../handlers/languageHandler/updateLanguage');
const getAllLanguagesDashboard = require('../handlers/languageHandler/getAllLanguagesDashboard');
const getLanguageByIdDashboard = require('../handlers/languageHandler/getLanguageByIdDashboard');
const restoreLanguage = require('../handlers/languageHandler/restoreLanguage');
const verifyToken = require('../middlewares/verifyToken');

languageRouter.get('/dashboard/:languageId', verifyToken, getLanguageByIdDashboard);

languageRouter.get('/dashboard', verifyToken, getAllLanguagesDashboard);

languageRouter.put('/delete/:languageId', verifyToken, deleteLanguage);

languageRouter.put('/restore/:languageId', verifyToken, restoreLanguage);

languageRouter.post('/', verifyToken, createLanguage);

languageRouter.get('/:languageId', getLanguageById);

languageRouter.get('/', getAllLanguages);

languageRouter.put('/:languageId', verifyToken, updateLanguage);

module.exports = languageRouter;