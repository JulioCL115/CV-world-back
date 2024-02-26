const getCategoryByIdControllerDashboard = require('../../controllers/categoryController/getCategoryByIdControllerDashboard');

const getCategoryByIdDashboard = async (req, res) => {
    try {
        const { categoryId } = req.params;

        if(!categoryId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const categoryFound = await getCategoryByIdControllerDashboard(categoryId);

        if(!categoryFound) {
            return res.status(404).json({ error: "No Category found." });
        }

        res.status(200).json(categoryFound);
    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};

module.exports = getCategoryByIdDashboard;
