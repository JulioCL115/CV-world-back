const { Router } = require("express");
const categoryRouter = Router();
const getAllCategories = require('../handlers/categoryHandler/getAllCategories');
const getCategoryById = require('../handlers/categoryHandler/getCategoryById');
const createCategory = require('../handlers/categoryHandler/createCategory');
const deleteCategory = require('../handlers/categoryHandler/deleteCategory');
const updateCategory = require('../handlers/categoryHandler/updateCategory');
const verifyToken = require('../middlewares/verifyToken');

categoryRouter.post('/', createCategory);

categoryRouter.get('/', getAllCategories);

categoryRouter.get('/:categoryId', getCategoryById);

categoryRouter.put('/:categoryId', updateCategory);

categoryRouter.put('/delete/:categoryId', verifyToken, deleteCategory);

module.exports = categoryRouter;