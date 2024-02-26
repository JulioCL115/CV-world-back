const restoreCategoryController = require('../../controllers/categoryController/restoreCategoryController');

const restoreCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;

        if(!categoryId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const categoryRestored = await restoreCategoryController(categoryId);

        if(!categoryRestored) {
            throw new Error('Failed to restore Category.');
        }

        res.status(200).json({ message: "Category restored successfully", categoryRestored });
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });    
    }
};

module.exports = restoreCategory;
