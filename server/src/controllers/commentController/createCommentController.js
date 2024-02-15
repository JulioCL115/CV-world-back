const { Comment, User, Cv } = require("../../db");

const createCommentController = async (comment, cvId, userId) => {
    try {
        const newComment = await Comment.create({
            comment,
            CvId: cvId,
            UserId: userId,
        });

        await newComment.reload({
            include: [
                { model: User }, // Cargar el modelo de usuario asociado al comentario
                { model: Cv }    // Cargar el modelo de CV asociado al comentario
            ]
        });

        return newComment;
    } catch (error) {
        console.error("Error creating comment: ", error);
        throw error;
    }
};

module.exports = createCommentController;
