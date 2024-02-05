const createCommentController = require("../../controllers/commentController/createCommentController");

const createComment = async (req, res) => {
  const { comment } = req.body;
  const { id } = req.params;
  try {
    const commentCreated = await createCommentController(comment, id);
    res.status(201).json(commentCreated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createComment;
