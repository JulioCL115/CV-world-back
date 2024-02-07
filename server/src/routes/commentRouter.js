const { Router } = require("express");
const commentRouter = Router();
const createComment = require("../handlers/commentHandler/createComment");

commentRouter.post("/comment", createComment);

module.exports = commentRouter;
