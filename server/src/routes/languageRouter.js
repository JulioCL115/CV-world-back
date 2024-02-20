const { Router } = require("express");
const languageRouter = Router();
const getAllLanguages = require('../handlers/languageHandler/getAllLanguages');

languageRouter.get('/', getAllLanguages);

module.exports = languageRouter;