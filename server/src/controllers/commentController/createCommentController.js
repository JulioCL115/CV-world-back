const { Comment } = require("../../db");

const createCommentController = async (comment, cvId, userId) => {
  try {
    
    const newComment = await Comment.create({
      comment,
      CvId: cvId,
      UserId: userId
    });

    return newComment;
    
  } catch (error) {
    console.error("Error creating comment: ", error);
    throw error;
  }
};
module.exports = createCommentController;
