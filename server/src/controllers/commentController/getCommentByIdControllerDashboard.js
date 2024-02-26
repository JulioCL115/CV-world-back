const { Comment } = require("../../db");

const getCommentByIdControllerDashboard = async (commentId) => {
    try {
        const commentFound = await Comment.findByPk(commentId);
 
        return commentFound;
    } catch (error) {
        console.error("Error searching Comment: ", error);
        throw error;
    }
};

module.exports = getCommentByIdControllerDashboard;
