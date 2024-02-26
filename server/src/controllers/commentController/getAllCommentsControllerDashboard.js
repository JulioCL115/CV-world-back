const { Comment } = require("../../db");

const getAllCommentsControllerDashboard = async () => {
    try {
        const allCommentsFound = await Comment.findAll();

        return allCommentsFound;

    } catch (error) {
        console.error("Error searching for Comments: ", error);
        throw error;
    }
};

module.exports = getAllCommentsControllerDashboard;
