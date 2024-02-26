const { Router } = require("express");
const commentRouter = Router();
const createComment = require("../handlers/commentHandler/createComment");
const deleteComment = require("../handlers/commentHandler/deleteComment");
const getAllComments = require('../handlers/commentHandler/getAllComments');
const getCommentById = require('../handlers/commentHandler/getCommentById');
const getAllCommentsDashboard = require('../handlers/commentHandler/getAllCommentsDashboard');
const getCommentByIdDashboard = require('../handlers/commentHandler/getCommentByIdDashboard')
const verifyToken = require('../middlewares/verifyToken');

commentRouter.get('/dashboard/:commentId', verifyToken, getCommentByIdDashboard);

commentRouter.get('/dashboard', verifyToken, getAllCommentsDashboard);

commentRouter.get('/:commentId', getCommentById);

commentRouter.get('/', getAllComments);

commentRouter.post('/:cvId/:userId', verifyToken, createComment);

commentRouter.put('/delete/:commentId', verifyToken, deleteComment);

module.exports = commentRouter;
