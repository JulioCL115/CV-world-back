const { User, Cv, Subscription, Comment } = require("../../db");

const getUser = async () => {
    try {   
        const AllUsersFound = await User.findAll({
            where: { deleted: false },
            include: [
                { model: Cv },
                { model: Subscription },
                { model: Comment }            
            ]
        });

        return AllUsersFound;

    } catch (error) {
        console.error("Error searching Users: ", error);
        throw error;
    }
};


module.exports = getUser;
