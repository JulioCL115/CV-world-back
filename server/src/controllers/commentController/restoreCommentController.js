const { Comment } = require("../../db");

const restoreCommentController = async (commentId) => {
    try {
        const commentFound = await Comment.findByPk(commentId);

        if (!commentFound) {
            const error = new Error("Comment not found for restoration");
            error.statusCode = 404; 
            throw error;
        }

        if (!commentFound.deleted) {
            const error = new Error("Comment is not deleted. Cannot restore.");
            error.statusCode = 400; 
            throw error;
        }
        
        await commentFound.update({
            deleted: false 
        });

        return commentFound;

    } catch (error) {
        console.error('Error restoring Comment:', error);
        throw error;
    }
};

module.exports = restoreCommentController;
