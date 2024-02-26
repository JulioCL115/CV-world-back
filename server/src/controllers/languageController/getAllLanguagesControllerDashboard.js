const { Language } = require("../../db");

const getAllLanguagesControllerDashboard = async () => {
    try {
        const AllLanguagesFound = await Language.findAll();

        return AllLanguagesFound;

    } catch (error) {
        console.error("Error searching for Languages: ", error);
        throw error;
    }
};


module.exports = getAllLanguagesControllerDashboard;
