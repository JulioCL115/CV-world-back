const { User, Cv, Subscription } = require("../../db");

const getUserByIdController = async (userId) => {
    try {   
        const userFound = await User.findByPk(userId, {
            include: [
                {
                    model: Subscription,
                },
                {
                    model: Cv,
                },
            ],
        });

        if (userFound) {
            // Manually filter out deleted CVs
            userFound.Cvs = userFound.Cvs.filter(cv => !cv.deleted);
        }

        return userFound;

    } catch (error) {
        console.error("Error searching for User: ", error);
        throw error;
    }
};

module.exports = getUserByIdController;