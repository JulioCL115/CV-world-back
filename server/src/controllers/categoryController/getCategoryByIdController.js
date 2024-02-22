const { Category } = require("../../db");

const getCategoryByIdController = async (categoryId) => {
    try {
        const categoryFound = await Category.findByPk(categoryId, {
           where: { deleted: false }
        })

        return categoryFound;

    } catch (error) {
        console.error("Error searching Category: ", error);
        throw error;
    }
};

module.exports = getCategoryByIdController;
