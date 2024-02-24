const { User, Cv, Subscription } = require("../../db");

const getUserByIdController = async (userId) => {
    try {   
        const userFound = await User.findByPk(userId, {
            where: { deleted: false },
            include: [
                {
                    model: Subscription,
                },
                {
                    model: Cv,
                },
            ],
        })

        return userFound

    } catch (error) {
        console.error("Error searching for User: ", error);
        throw error;
    }
};

module.exports = getUserByIdController;
