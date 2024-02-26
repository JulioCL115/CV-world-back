const restoreCommentController = require("../../controllers/commentController/restoreCommentController");

const restoreComment = async (req, res) => {
    try {
        const { commentId } = req.params;

        if(!commentId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const commentRestored = await restoreCommentController(commentId);

        if(!commentRestored) {
            throw new Error('Failed to restore Comment.');
        }

        res.status(200).json({ message: "Comment restored successfully", commentRestored });
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });    
    }
};

module.exports = restoreComment;
