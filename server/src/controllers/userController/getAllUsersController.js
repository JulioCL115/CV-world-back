const { User, Cv, Subscription, Comment } = require("../../db");

const getUser = async () => {
    try {   
        const usersFound = await User.findAll({
            include: [
                { model: Cv },
                { model: Subscription },
                { model: Comment }            
            ]
        });

        return usersFound;

    } catch (error) {
        console.error("Error searching Users: ", error);
        throw error;
    }
};


module.exports = getUser;
