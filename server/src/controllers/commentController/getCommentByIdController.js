const { Comment } = require("../../db");

const getCommentByIdController = async (commentId) => {
    try {
        const commentFound = await Comment.findByPk(commentId, {
            where: { deleted: false }
        });
 
        return commentFound;
    } catch (error) {
        console.error("Error searching Comment: ", error);
        throw error;
    }
};

module.exports = getCommentByIdController;
