const { Router } = require("express");
const commentRouter = Router();
const createComment = require("../handlers/commentHandler/createComment");
const deleteCommnet = require("../handlers/commentHandler/deleteComment");

commentRouter.delete('/:cvId', deleteCommnet);

commentRouter.post('/:cvId/:userId', createComment);

module.exports = commentRouter;
