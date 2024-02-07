const { Router } = require("express");
const commentRouter = Router();
const createComment = require("../handlers/commentHandler/createComment");
const validateComment = require('../middlewares/validateComment');

commentRouter.post('/:cvId/:userId', validateComment, createComment);

module.exports = commentRouter;
