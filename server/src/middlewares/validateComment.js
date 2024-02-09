const validateComment = (req, res, next) => {
    const { comment } = req.body;

    const { cvId, userId } = req.params;

    if (!cvId || !userId) {
        return res.status(400).json({ error: "Please provide a valid ID in the request parameters" });
    }
      
    if(!comment) {
        return res.status(400).json({ error: 'Please enter a comment' });
    }  

    next();
}

module.exports = validateComment;
