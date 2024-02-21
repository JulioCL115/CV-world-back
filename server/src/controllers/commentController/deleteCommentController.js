const { Comment } = require("../../db");

const deleteCommentController = async (commentId) => {
    try {

        const commentFound = await Comment.findByPk(commentId);

        if (!commentFound) {
            const error = new Error("Comment not found for deletion");
            error.statusCode = 404; 
            throw error;
        }

        await commentFound.update(
            { deleted: true }
        );

        return commentFound;
         
    } catch (error) {
        console.error("Error deteling Comment: ", error);
        throw error;
    }
};

module.exports = deleteCommentController;
