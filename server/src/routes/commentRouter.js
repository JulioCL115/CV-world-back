const { Router } = require("express");
const commentRouter = Router();
const createComment = require("../handlers/commentHandler/createComment");
const deleteComment = require("../handlers/commentHandler/deleteComment");
const getAllComments = require('../handlers/commentHandler/getAllComments');
const getCommentById = require('../handlers/commentHandler/getCommentById');
const verifyToken = require('../middlewares/verifyToken');

commentRouter.get('/', getAllComments);

commentRouter.get('/:commentId', getCommentById);

commentRouter.post('/:cvId/:userId', createComment);

commentRouter.put('/delete/:commentId', deleteComment);

module.exports = commentRouter;
