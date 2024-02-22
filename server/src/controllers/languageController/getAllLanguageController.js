const { Language } = require("../../db");

const getAllLanguagesController = async () => {
    try {
        const allLanguagesFound = await Language.findAll({
            where: { deleted: false }
        });

        return allLanguagesFound;

    } catch (error) {
        console.error("Error searching for Languages: ", error);
        throw error;
    }
};


module.exports = getAllLanguagesController;
