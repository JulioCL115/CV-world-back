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
                    where: {
                        deleted: false,
                    },
                    required: false,
                },
            ],
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

module.exports = getUserByIdController;