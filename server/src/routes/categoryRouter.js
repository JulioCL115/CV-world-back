const { Router } = require("express");
const categoryRouter = Router();
const getAllCategories = require('../handlers/categoryHandler/getAllCategories');

categoryRouter.get('/', getAllCategories);

module.exports = categoryRouter;