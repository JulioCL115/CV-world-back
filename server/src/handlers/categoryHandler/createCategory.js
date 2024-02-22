const createCategoryController = require('../../controllers/categoryController/createCategoryController');

const createCategory = async (req, res) => {
    try {

        const { categoryName } = req.body;

        const categoryCreated = await createCategoryController(categoryName);

        if(!categoryCreated) {
            return res.status(404).json({ error: "No Category created." });
        }

        res.status(200).json(categoryCreated);
    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};

module.exports = createCategory;
