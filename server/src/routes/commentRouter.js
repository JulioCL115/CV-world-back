const { Router } = require("express");
const commentRouter = Router();
const createComment = require("../handlers/commentHandler/createComment");

commentRouter.post('/:cvId/:userId', createComment);

module.exports = commentRouter;
