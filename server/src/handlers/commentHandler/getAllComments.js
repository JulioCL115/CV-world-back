const getAllCommentsController = require('../../controllers/commentController/getAllCommentsController'); 

const getAllComments = async (req, res) => {
    try {
        const allComments = await getAllCommentsController();

        if(!allComments || allComments.length === 0) {
            return res.status(404).json({ error: "No Comments found." });
        }

        res.status(200).json(allComments);
    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllComments;
