const deleteCommentController = require("../../controllers/commentController/deleteCommentController");

const createComment = async (req, res) => {
    try {
        const { cvId } = req.params;

        const { id } = req.body

        if (!cvId) {
            return res.status(400).json({ error: "Please provide a valid ID in the request parameters" });
        }
        
        const commentDeleted = await deleteCommentController(cvId, id);

        if(!commentDeleted) {
            throw new Error('Failed to delete CV');
        }
        res.status(200).json(commentDeleted);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = createComment;
