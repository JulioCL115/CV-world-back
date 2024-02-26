const { Router } = require("express");
const categoryRouter = Router();
const getAllCategories = require('../handlers/categoryHandler/getAllCategories');
const getCategoryById = require('../handlers/categoryHandler/getCategoryById');
const createCategory = require('../handlers/categoryHandler/createCategory');
const deleteCategory = require('../handlers/categoryHandler/deleteCategory');
const updateCategory = require('../handlers/categoryHandler/updateCategory');
const getAllCategoriesDashboard = require('../handlers/categoryHandler/getAllCategoriesDashboard');
const getCategoryByIdDashboard = require('../handlers/categoryHandler/getCategoryByIdDashboard')
const verifyToken = require('../middlewares/verifyToken');

categoryRouter.get('/dashboard/:categoryId', verifyToken, getCategoryByIdDashboard);

categoryRouter.get('/dashboard', verifyToken, getAllCategoriesDashboard);

categoryRouter.put('/delete/:categoryId', verifyToken, deleteCategory);

categoryRouter.post('/', verifyToken, createCategory);

categoryRouter.get('/:categoryId', getCategoryById);

categoryRouter.get('/', getAllCategories);

categoryRouter.put('/:categoryId', verifyToken, updateCategory);

module.exports = categoryRouter;