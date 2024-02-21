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
                {
                    model: Subscription,
                },
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
