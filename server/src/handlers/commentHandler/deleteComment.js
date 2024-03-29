const deleteCommentController = require("../../controllers/commentController/deleteCommentController");

const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;

        console.log('ID DE COMENTARIO' + commentId);

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
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });    
    }
};

module.exports = deleteComment;
