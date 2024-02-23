const { User, Cv, Subscription } = require("../../db");
const { Op } = require("sequelize");

const getUser = async (email) => {
    try {   
        const userFound = await User.findOne({
            where: {
                email: {
                    [Op.like]: email,
                },
                deleted: false
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

        return result

    } catch (error) {
        console.error("Error searching for User: ", error);
        throw error;
    }
};


module.exports = getUser;
