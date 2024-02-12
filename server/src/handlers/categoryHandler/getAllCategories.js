const getAllCategoriesController = require('../../controllers/categoryController/getAllCategoriesController');

const getAllCategories = async (req, res) => {
    try {

        const allCategories = await getAllCategoriesController();

        if(!allCategories || allCategories.length === 0) {
            return res.status(404).json({ error: "No Categories found." });
        }

        res.status(200).json(allCategories);
    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllCategories;
