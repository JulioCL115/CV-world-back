const { Router } = require("express");
const categoryRouter = Router();
const getAllCategories = require('../handlers/categoryHandler/getAllCategories');
const getCategoryById = require('../handlers/categoryHandler/getCategoryById');
const createCategory = require('../handlers/categoryHandler/createCategory');

categoryRouter.post('/', createCategory);

categoryRouter.get('/', getAllCategories);

categoryRouter.get('/:categoryId', getCategoryById);

module.exports = categoryRouter;