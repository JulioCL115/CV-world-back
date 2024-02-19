const { Comment, Cv } = require("../../db");

const deleteCommentController = async (cvId, id) => {
    try {

        const cvFound = await Cv.findByPk(cvId);

        if (!cvFound) {
            const error = new Error("CV not found for comment deletion");
            error.statusCode = 404; 
            throw error;
        }

        const commentToDelete = await Comment.findOne({
            where: {
                id,
                CvId: cvId 
            }
        });

        if (!commentToDelete) {
            const error = new Error("Comment not found for deletion");
            error.statusCode = 404;
            throw error;
        }

        await commentToDelete.destroy();
 
        return commentToDelete;
        
    } catch (error) {
        console.error("Error deteling comment: ", error);
        throw error;
    }
};

module.exports = deleteCommentController;
