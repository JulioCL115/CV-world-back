const { Category } = require("../../db");

const restoreCategoryController = async (categoryId) => {
    try {
        const categoryFound = await Category.findByPk(categoryId);

        if (!categoryFound) {
            const error = new Error("Category not found for restoration");
            error.statusCode = 404; 
            throw error;
        }

        if (!categoryFound.deleted) {
            const error = new Error("Category is not deleted. Cannot restore.");
            error.statusCode = 400; 
            throw error;
        }
        
        await categoryFound.update({
            deleted: false 
        });

        return categoryFound;

    } catch (error) {
        console.error('Error restoring Category:', error);
        throw error;
    }
};

module.exports = restoreCategoryController;
