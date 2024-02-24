const { Comment } = require("../../db");

const getAllCommentsController = async () => {
    try {
        const allCommentsFound = await Comment.findAll({
            where: { deleted: false }
        });

        return allCommentsFound;

    } catch (error) {
        console.error("Error searching for Comments: ", error);
        throw error;
    }
};

module.exports = getAllCommentsController;
