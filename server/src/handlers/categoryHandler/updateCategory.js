const updateCategoryController = require('../../controllers/categoryController/updateCategoryController');

const updateCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;

        const { name } = req.body;

        if(!categoryId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const categoryUpdated = await updateCategoryController(name, categoryId);

        if(!categoryUpdated) {
            throw new Error('Failed to update Category.');
        }

        res.status(200).json(categoryUpdated);
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });    
    }
};

module.exports = updateCategory;
