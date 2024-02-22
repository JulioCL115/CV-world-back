const createCommentController = require("../../controllers/commentController/createCommentController");
const { commentSchema } = require("../../schemas/commentSchema");

const createComment = async (req, res) => {
    try {
        const { comment } = req.body;

        const { cvId, userId } = req.params;

        console.log(cvId, userId)

        console.log(req);

        if (!cvId || !userId) {
            return res.status(400).json({ error: "Please provide a valid ID in the request parameters" });
        }
          
        const { error } = commentSchema.validate(req.body);

        if(error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const commentCreated = await createCommentController(comment, cvId, userId);

        res.status(201).json(commentCreated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = createComment;
