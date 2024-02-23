const deleteCommentController = require("../../controllers/commentController/deleteCommentController");

const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;

        if (!commentId) {
            return res.status(400).json({ error: "Please provide a valid ID in the request parameters" });
        }
        
        const commentDeleted = await deleteCommentController(commentId);

        if(!commentDeleted) {
            throw new Error('Failed to delete Comment');
        }

        res.status(200).json({
            message: 'Comment deleted successfully',
            commentDeleted
        }); 

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = deleteComment;
