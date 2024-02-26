const { Category } = require("../../db");

const getAllCategoriesControllerDashboard = async () => {
    try {
        const allCategoriesFound = await Category.findAll({});

        return allCategoriesFound;
    } catch (error) {
        console.error("Error searching for categories: ", error);
        throw error;
    }
};


module.exports = getAllCategoriesControllerDashboard;
