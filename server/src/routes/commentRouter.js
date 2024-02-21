const { Router } = require("express");
const commentRouter = Router();
const createComment = require("../handlers/commentHandler/createComment");
const deleteComment = require("../handlers/commentHandler/deleteComment");

commentRouter.post('/:cvId/:userId', createComment);

commentRouter.put('/delete/:commentId', deleteComment);

module.exports = commentRouter;
