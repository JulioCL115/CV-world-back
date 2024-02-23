const getCommentByIdController = require('../../controllers/commentController/getCommentByIdController');

const getCommentById = async (req, res) => {
    try {
        const { commentId } = req.params;

        if(!commentId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const commentFound = await getCommentByIdController(commentId);

        if(!commentFound) {
            return res.status(404).json({ error: "No Comment found." });
        }

        res.status(200).json(commentFound);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getCommentById;
