const { Category } = require("../../db");

const getCategoryByIdControllerDashboard = async (categoryId) => {
    try {
        const categoryFound = await Category.findByPk(categoryId)

        return categoryFound;
    } catch (error) {
        console.error("Error searching Category: ", error);
        throw error;
    }
};

module.exports = getCategoryByIdControllerDashboard;
