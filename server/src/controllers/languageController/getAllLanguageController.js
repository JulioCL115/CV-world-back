const { Language } = require("../../db");

const getAllLanguagesController = async () => {
    try {
        const AllLanguagesFound = await Language.findAll({
            where: { deleted: false }
        });

        return AllLanguagesFound;

    } catch (error) {
        console.error("Error searching for Languages: ", error);
        throw error;
    }
};


module.exports = getAllLanguagesController;
