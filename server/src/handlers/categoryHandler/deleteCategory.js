const deleteCategoryController = require('../../controllers/categoryController/deleteCategoryController');

const deleteCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;

        if(!categoryId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const categoryDeleted = await deleteCategoryController(categoryId);

        if(!categoryDeleted) {
            throw new Error('Failed to delete Category.');
        }

        res.status(200).json(categoryDeleted);
    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};

module.exports = deleteCategory;
