const { User, Cv, Subscription } = require("../../db");

const getUserByIdControllerDashboard = async (userId) => {
    try {
        const userFound = await User.findByPk(userId, {
            include: [
                {
                    model: Subscription
                },
                {
                    model: Cv
                }
            ]
        });

        if (!userFound.Cvs) {
            userFound.Cvs = [];
        }

        return userFound;
    } catch (error) {
        console.error("Error searching for User: ", error);
        throw error;
    }
};

module.exports = getUserByIdControllerDashboard;