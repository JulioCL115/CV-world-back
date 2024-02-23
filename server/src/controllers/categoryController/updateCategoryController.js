const { Category } = require("../../db");

const updateCategoryController = async (name, categoryId) => {
    try {
        const categoryFound = await Category.findByPk(categoryId);

        if (!categoryFound) {
            const error = new Error("Category not found for updated");
            error.statusCode = 404; 
            throw error;
        }
        
        if (categoryFound.deleted) {
            const error = new Error("Cannot update a deleted Category");
            error.statusCode = 400; 
            throw error;
        }

        const categoryUpdated = await categoryFound.update({
            name
        });

        return categoryUpdated;

    } catch (error) {
        console.error("Error updating Category: ", error);
        throw error;
    }
};


module.exports = updateCategoryController;
