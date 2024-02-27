const createCategoryController = require('../../controllers/categoryController/createCategoryController');

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        console.log(name)

        const categoryCreated = await createCategoryController(name);

        if(!categoryCreated) {
            return res.status(404).json({ error: "No Category created." });
        }

        res.status(200).json(categoryCreated);
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });    
    }
};

module.exports = createCategory;
