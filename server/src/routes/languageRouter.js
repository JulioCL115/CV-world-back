const { Router } = require("express");
const languageRouter = Router();
const getAllLenguages = require('../handlers/languageHandler/getAllLenguages');

languageRouter.get('/', getAllLenguages);

module.exports = languageRouter;