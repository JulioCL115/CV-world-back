const { Router } = require("express");
const commentRouter = Router();
const createComment = require("../handlers/commentHandler/createComment");
const deleteCommnet = require("../handlers/commentHandler/deleteComment");

commentRouter.post('/:cvId/:userId', createComment);

commentRouter.delete('/:cvId', deleteCommnet);

module.exports = commentRouter;
