const getAllCategoriesControllerDashboard = require('../../controllers/categoryController/getAllCategoriesControllerDashboard');

const getAllCategoriesDashboard = async (req, res) => {
    try {
        const allCategories = await getAllCategoriesControllerDashboard();

        if(!allCategories || allCategories.length === 0) {
            return res.status(404).json({ error: "No Categories found." });
        }

        res.status(200).json(allCategories);
    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllCategoriesDashboard;
