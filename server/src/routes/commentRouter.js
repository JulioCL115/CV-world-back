const { Router } = require("express");
const commentRouter = Router();
const createComment = require("../handlers/commentHandler/createComment");

commentRouter.post("/comment/:cvId/:userId", createComment);
// commentRouter.post("/comment", (req,res)=>{

// });

module.exports = commentRouter;
