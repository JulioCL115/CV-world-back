const createCommentController = require("../../controllers/commentController/createCommentController");
const {createCommentSchema,ZodError} = require("../../schemas/commentSchema");
const createComment = async (req, res) => {
  const { comment } = req.body;
  console.log(comment);
  createCommentSchema.parse({ comment });
  const { id } = req.params;
  try {
    const commentCreated = await createCommentController(comment, id);
    res.status(201).json(commentCreated);
  } catch (error) {
     if (error instanceof ZodError) {
       return res
         .status(400)
         .json(error.issues.map((issue) => ({ error: issue.message })));
     }
    res.status(500).json({ error: error.message });
  }
};

module.exports = createComment;
