const getAllCommentsControllerDashboard = require('../../controllers/commentController/getAllCommentsControllerDashboard');

const getAllCommentsDashboard = async (req, res) => {
    try {
        const allComments = await getAllCommentsControllerDashboard();

        if(!allComments || allComments.length === 0) {
            return res.status(404).json({ error: "No Comments found." });
        }

        res.status(200).json(allComments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllCommentsDashboard;
