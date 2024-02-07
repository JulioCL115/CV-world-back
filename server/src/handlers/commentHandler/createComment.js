const createCommentController = require("../../controllers/commentController/createCommentController");
const { commentSchema, ZodError } = require('../../schemas/commentSchema');

const createComment = async (req, res) => {
  try {
    const { comment } = req.body;

    const { cvId, userId } = req.params;

    commentSchema.parse({comment});

    const commentCreated = await createCommentController(comment, cvId, userId);

    res.status(201).json(commentCreated);

  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error.issues.map(issue => ({ error: issue.message })));
    }
    res.status(500).json({ error: error.message });
  }
};

module.exports = createComment;
