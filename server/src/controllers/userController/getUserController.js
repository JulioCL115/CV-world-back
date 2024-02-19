const { User, Cv, Subscription } = require("../../db");
const { Op } = require("sequelize");

const getUser = async (email) => {
    try {   
        const userFound = await User.findOne({
            where: {
                email: {
                    [Op.like]: email,
                }
            },
            include: [
                // Assuming 'Subscription' is the associated model for the 'subscription' field
                {
                    model: Subscription,
                    // attributes: ['price'], // Specify the attributes you want to include
                },
                // Assuming 'Cv' is the associated model for the 'Cv' field
                {
                    model: Cv,
                },
            ],
        });


        const result = JSON.parse(JSON.stringify(userFound));

        if (result && result.Cvs) {
            result.Cvs = result.Cvs.filter(cv => cv.deleted === false);
        }

        console.log(result)

        return result

    } catch (error) {
        console.error("Error searching for User: ", error);
        throw error;
    }
};


module.exports = getUser;
